import { db } from '@vercel/postgres';
import {
  invoices,
  invoicesDetail,
  customers,
  revenue,
  users,
  products,
  categories,
  colors,
  sizes,
  productVariants,
} from '@/lib/placeHolderData';
import { hashPassword } from '@/lib/auth';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`DROP TABLE IF EXISTS users`;

  await client.sql`
    CREATE TABLE users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      role TEXT NOT NULL,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await hashPassword(user.password)
      return client.sql`
        INSERT INTO users (id, name, email, role, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${user.role}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedInvoices() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`DROP TABLE IF EXISTS invoices`;

  await client.sql`
    CREATE TABLE invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      status VARCHAR(255) NOT NULL,
      date CHAR(10) NOT NULL
    );
  `;

  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => client.sql`
        INSERT INTO invoices (id, customer_id, status, date)
        VALUES (${invoice.id} ,${invoice.customer_id}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedInvoices;
}

async function seedInvoicesDetail() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`DROP TABLE IF EXISTS invoices_detail`
  await client.sql`
   CREATE TABLE invoices_detail(
    id UUID DEFAULT uuid_generate_v4(),
    product_id UUID,
    price INT,
    quantity INT,
    size VARCHAR(10),
    color VARCHAR(10)
   )
  `
  const InsertedInvoicesDetail = await Promise.all(
    invoicesDetail.map(
      (invoice) => client.sql`
        INSERT INTO invoices_detail (id,product_id, price, quantity, size, color)
          VALUES (${invoice.id},${invoice.product_id},${invoice.price}, ${invoice.quantity}, ${invoice.size}, ${invoice.color})
      `
    )
  )
  return InsertedInvoicesDetail
}



async function seedCustomers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`DROP TABLE IF EXISTS customers`;

  await client.sql`
    CREATE TABLE customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedCustomers = await Promise.all(
    customers.map(
      (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    ),
  );

  return insertedCustomers;
}

async function seedRevenue() {
  await client.sql`DROP TABLE IF EXISTS revenue`;
  await client.sql`
    CREATE TABLE revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
    ),
  );

  return insertedRevenue;
}

async function seedCategories() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  await client.sql`DROP TABLE IF EXISTS categories`;

  await client.sql`CREATE TABLE categories(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    label VARCHAR(255) NOT NULL
  );`

  const insertedCategories = await Promise.all(
    categories.map(
      (category) => client.sql`
        INSERT INTO categories (id, title, label) 
        VALUES (${category.id}, ${category.title}, ${category.english_name})
      `
    )
  )
  return insertedCategories
}
async function seedColors() {
  await client.sql`DROP TABLE IF EXISTS colors`
  await client.sql`
    CREATE TABLE colors (
      id SERIAL PRIMARY KEY,
      name VARCHAR(12) NOT NULL,
      color VARCHAR(8) NOT NULL
    )
  `
  const insertedColors = await Promise.all(
    colors.map(
      (item) => client.sql`
        INSERT INTO colors (name, color)
        VALUES (${item.name}, ${item.color})
      `
    )
  )
  return insertedColors
}

async function seedSizes() {
  await client.sql`DROP TABLE IF EXISTS sizes`
  await client.sql`
    CREATE TABLE sizes (
      id SERIAL PRIMARY KEY,
      name VARCHAR(20) NOT NULL,
      size VARCHAR(20) NOT NULL
    )
  `
  const insertedSizes = await Promise.all(
    sizes.map(
      (item) => client.sql`
        INSERT INTO sizes (name, size)
        VALUES (${item.name}, ${item.size})
      `
    )
  )
  return insertedSizes
}


async function seedProductVariants() {
  await client.sql`DROP TABLE IF EXISTS product_variants`

  await client.sql`
    CREATE TABLE product_variants(
      id SERIAL PRIMARY KEY,
      product_id UUID NOT NULL REFERENCES products(id),
      color_id INT NOT NULL REFERENCES colors(id),
      size_id INT NOT NULL REFERENCES sizes(id),
      inventory INT NOT NULL
    )
  `
  const insertedProductsVariants = Promise.all(
    productVariants.map(
      (item) => client.sql`
        INSERT INTO product_variants(product_id, color_id, size_id, inventory)
        VALUES (${item.product_id},${item.color_id},${item.size_id},${item.inventory})
      `
    )
  )
  return insertedProductsVariants
}


async function seedProducts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`DROP TABLE IF EXISTS products`;
  await client.sql`
    CREATE TABLE products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      english_name VARCHAR(255),
      thumbnail_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedProducts = await Promise.all(
    products.map(
      (product) => client.sql`
        INSERT INTO products (id, name, english_name, thumbnail_url)
        VALUES (${product.id} ,${product.name}, ${product.english_name}, ${product.thumbnail_url})
      `,
    ),
  );
  return insertedProducts;
}







export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedCustomers();
    await seedInvoices();
    await seedInvoicesDetail();
    await seedRevenue();
    // await seedCategories();
    await seedProducts();
    await seedColors();
    await seedSizes();
    await seedProductVariants();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    console.log("err =>", error)
    return Response.json({ error }, { status: 500 });
  }
}
