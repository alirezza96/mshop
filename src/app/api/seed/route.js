import { db } from '@vercel/postgres';
import { invoices, invoicesDetail, customers, revenue, users, products, categories } from '@/app/lib/placeHolderData';
import { hashPassword } from '@/app/lib/auth';

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
  await client.sql`DROP TABLE IF EXISTS invoices_detail`
  await client.sql`
   CREATE TABLE invoices_detail(
    id UUID,
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
    fa VARCHAR(255) NOT NULL,
    en VARCHAR(255) NOT NULL
  );`

  const insertedCategories = await Promise.all(
    categories.map(
      (category) => client.sql`
        INSERT INTO categories (id, fa, en) 
        VALUES (${category.id}, ${category.fa}, ${category.en})
      `
    )
  )
  return insertedCategories
}




async function seedProducts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`DROP TABLE IF EXISTS products`;
  await client.sql`
    CREATE TABLE products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      fa VARCHAR(255) NOT NULL,
      en VARCHAR(255),
      category_id UUID NOT NULL,
      thumbnail_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedProducts = await Promise.all(
    products.map(
      (product) => client.sql`
        INSERT INTO products (id, fa, en, category_id, thumbnail_url)
        VALUES (${product.id} ,${product.fa}, ${product.en}, ${product.category_id}, ${product.thumbnail_url})
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
    await seedCategories();
    await seedProducts();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    console.log("err =>", error)
    return Response.json({ error }, { status: 500 });
  }
}
