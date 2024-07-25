import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
  Category,
  CustomerField,
  TableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Product,
  Revenue,
} from './definitions';

import { formatCurrency, formatDateToLocal, formatNumber } from './utils';
import { tokenPayload } from './auth';

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

export async function fetchLatestProducts() {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 10000));

    const data = await sql<Product>`
            SELECT * FROM PRODUCTS LIMIT 6
        `
    return data.rows
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest products.');
  }
}
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
      JOIN customers ON invoices.customer_id = customers.id
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

export async function fetchPreOrders() {
  const payload = await tokenPayload()
  if(!payload) return false
  try {
    const data = await sql`
      SELECT * FROM invoices as h
        LEFT OUTER JOIN invoices_detail as d
          ON h.id = d.id
        LEFT OUTER JOIN products as p
          ON p.id = d.product_id
          WHERE h.customer_id = ${payload.id}
            AND h.status = 'pending'
    `
    const preOrders = data.rows.map(preOrder => ({
      ...preOrder,
      amount: formatCurrency(preOrder.amount || 0),
      price: formatCurrency(preOrder.price || 0),
      quantity: formatNumber(preOrder.quantity || 0),
      data: formatDateToLocal(preOrder.date)
    }))
    return { preOrders, rowCount: formatNumber(data.rowCount) }
  } catch (error) {
    console.log("Database error =>", error)
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
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = formatNumber(Number(data[0].rows[0].count));
    const numberOfCustomers = formatNumber(Number(data[1].rows[0].count));
    const totalPaidInvoices = formatCurrency(Number(data[2].rows[0].paid));
    const totalPendingInvoices = formatCurrency(Number(data[2].rows[0].pending));

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
      fa ILIKE ${`%${query}%`} OR
      en ILIKE ${`%${query}%`}
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
     fa ILIKE ${`%${query}%`} OR
     en ILIKE ${`%${query}%`}
  `;
    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchProductById(id: string) {
  try {
    const data = await sql`
    SELECT  * FROM products where id = ${id}
`
    return data.rows[0]
  } catch (error) {
    console.error("Database error =>", error)
    throw new Error("failed to fetch product by id")
  }

}

export async function fetchInvoiceById(id: string) {
  noStore()
  try {
    const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
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
      JOIN customers ON invoices.customer_id = customers.id
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
    JOIN customers ON invoices.customer_id = customers.id
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


export async function fetchCustomers() {
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
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
		LEFT JOIN invoices ON customers.id = invoices.customer_id
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

export const fetchCustomersPage = async (query: string) => {
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