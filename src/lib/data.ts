import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
  Category,
  TableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Product,
  Revenue,
  UsersField,
} from './definitions';
import { formatCurrency, formatDateToLocal, formatNumber } from './utils';
// import { tokenPayload } from './auth';
import { validate, v4 } from 'uuid';
import { cache } from 'react';


export async function fetchRevenue() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
export const fetchLatestProducts = cache(
  async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 10000));

      const data = await sql<Product>`
              SELECT products.* , images.src FROM products
              LEFT OUTER JOIN (
                SELECT src, product_id FROM images WHERE is_thumbnail = true
              ) as images on images.product_id= products.id
                LIMIT 6
            `
      return data.rows
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest products.');
    }
  }

)
export async function fetchPopularProducts() {
  try {
    const data = await sql<Product>`
            SELECT * FROM PRODUCTS LIMIT 6
        `
    return data.rows
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest products.');
  }
}

export async function fetchLatestInvoices() {
  try {
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.user_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchPreOrders(userId: string) {

  try {
    const data = await sql`
      SELECT h.date,p.name, p.english_name, p.thumbnail_url, d.price, d.quantity, sizes.name as size_name, colors.name as color_name FROM invoices as h
        LEFT OUTER JOIN invoices_detail as d
          ON h.id = d.id
        LEFT OUTER JOIN products as p
          ON p.id = d.product_id
	left outer join product_variants as pv on pv.product_id = p.id
	left outer join colors on colors.id = pv.color_id
	left outer join sizes on sizes.id = pv.size_id
          WHERE h.user_id = ${userId}
            AND h.status = 'pending'
    `
    const preOrders = data.rows
    return { preOrders, rowCount: data.rowCount }
  } catch (error) {
    console.error("Database error (fetchPreOrders) =>", error)
    throw new Error("Failed to fetch pre order")
  }
}


export async function fetchCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`select 
	sum(d.price * d.quantity) as total_price,
  h.status
  from invoices as h
	inner join invoices_detail as d on h.id = d.id
	group by h.status`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);
    const numberOfInvoices = formatNumber(Number(data[0].rows[0].count));
    const numberOfCustomers = formatNumber(Number(data[1].rows[0].count));
    const totalPaidInvoices = formatCurrency(Number(data[2].rows.filter(item => item.status === "paid")[0]?.total_price));
    const totalPendingInvoices = formatCurrency(Number(data[2].rows.filter(item => item.status === "pending")[0]?.total_price));

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 2;

export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {

    const invoices = await sql<Product>`
      SELECT
        *
      FROM products
      WHERE
      name ILIKE ${`%${query}%`} OR
      english_name ILIKE ${`%${query}%`}
      ORDER BY id DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function fetchProductsPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
      FROM products
      WHERE
     name ILIKE ${`%${query}%`} OR
     english_name ILIKE ${`%${query}%`}
  `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchProductById(id: string, size: string, color: string) {
  try {

    if (!validate(id)) return false
    const data = await sql`
    select 
	    products.id,
	    products.name,
	    products.english_name,
	    products.thumbnail_url,
	    product_variants.inventory,
	    colors.id as color_id,
	    colors.name as color_name,
	    sizes.id as size_id,
	    sizes.name as size_name
	    from products
	    left outer join product_variants on products.id=product_variants.product_id
	    left outer join colors on colors.id = product_variants.color_id
	    left outer join sizes on sizes.id = product_variants.size_id
    where products.id =${id}
    `
    return data.rows[0]
  } catch (error) {
    console.error("Database error (fetchProductById) =>", error)
    throw new Error("failed to fetch product by id")
  }
}
export async function fetchProductColorsById(id: string) {

  const colors = await sql`
    select distinct c.name, c.color, case when inventory > 0 then true else false end as is_available from product_variants as pv
      inner join colors as c
        on c.id = pv.color_id
      where pv.product_id = ${id}
  `
  return colors.rows
}

export async function fetchProductVariants(id:string) {
  const data = await sql`
    select  c.name as c_key, c.color as c_value, s.name as s_key, s.size as s_value, pv.inventory  from product_variants as pv
      inner join colors as c
        on c.id = pv.color_id
	inner join sizes as s
		on s.id = pv.size_id
      where pv.product_id = ${id}
  `
  return data.rows
}

export async function fetchProductSizesById(id: string) {

  const sizes = await sql`
    SELECT DISTINCT s.name, s.size, case when inventory > 0 then true else false end as is_available FROM product_variants as pv
      INNER JOIN sizes as s 
        ON s.id = pv.size_id
    WHERE pv.product_id = ${id}  
  `
  return sizes.rows
}


export async function fetchInvoiceById(id: string) {
  noStore()
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.user_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `;

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));
    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}
export async function fetchCategories() {
  try {
    const data = await sql<Category>`
        SELECT * FROM categories
        `
    const categories = data.rows
    return categories
  } catch (error) {
    console.error("Database error", error)
    throw new Error("Failed to fetch categories")
  }
}




//////////////////



export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.user_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.user_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}


export async function fetchUsers() {
  try {
    const data = await sql<UsersField>`
      SELECT
        id,
        name
      FROM users
      ORDER BY name ASC
    `;
    const users = data.rows;
    return users;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    const data = await sql<TableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.user_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `;

    const customers = data.rows.map((customer) => ({
      ...customer,
      total_pending: formatCurrency(customer.total_pending),
      total_paid: formatCurrency(customer.total_paid),
    }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customer table.');
  }
}

export const fetchUsersPage = async (query: string) => {
  try {
    const count = await sql`SELECT COUNT(*)
  	FROM customers
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of customers.');
  }
}

export const fetchFavorite = async (product_id: string, user_id: string) => {
  try {
    const favorites = await sql`
      SELECT 1 FROM favorites WHERE 
        product_id=${product_id} 
        AND user_id=${user_id}
    `

    const isFavorite = Boolean(favorites.rowCount)
    return isFavorite
  } catch (error) {
    console.error("Database error =>", error)
    throw new Error("failed to fetch favorite")
  }
}

export const fetchColors = async () => {
  try {
    const data = await sql`
      SELECT * FROM colors
    `
    const colors = data.rows
    return colors
  } catch (error) {
    console.error("database error =>", error)
    throw new Error("failed to fetch colors")
  }
}


export const fetchSizes = async () => {
  try {
    const data = await sql`
      select * from sizes
    `
    const sizes = data.rows
    return sizes
  } catch (error) {
    console.error("database error =>", error)
    throw new Error("failed to fetch sizes")
  }
}