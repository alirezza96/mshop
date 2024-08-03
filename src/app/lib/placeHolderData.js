// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

import { randomUUID } from "crypto";
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: randomUUID(),
    name: 'admin',
    email: 'admin@admin.com',
    role: "admin",
    password: '123456',
  },
  {
    id: randomUUID(),
    name: 'user',
    email: 'user@user.com',
    role: "user",
    password: '123456',
  },
  {
    id: randomUUID(),
    name: 'customer',
    email: 'customer@customer.com',
    role: "user",
    password: '123456',
  },
];

const customers = [
  {
    id: users[2].id,
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: randomUUID(),
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: randomUUID(),
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: randomUUID(),
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: randomUUID(),
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: randomUUID(),
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];
const categories = [
  {
    id: randomUUID(),
    title: 'جوراب',
    label: 'tights',
  },
  {
    id: randomUUID(),
    title: 'تیشرت',
    label: 'tee-shirt',
  },
  {
    id: randomUUID(),
    title: 'هودی',
    label: 'hoodies',
  },
  {
    id: randomUUID(),
    title: 'جین',
    label: 'jeans',
  },
];

const colors = [
  {
    title: "قرمز",
    hex: "ff0000",
  },
  {
    title: "زرد",
    hex: "ffff00",
  },
  {
    title: "آبی",
    hex: "0000ff",
  },
  {
    title: "صورتی",
    hex: "ff00ff",
  },
]
const sizes = [
  {
    id: randomUUID(),
    title: "کوچک",
    size: "sm",
  },
  {
    id: randomUUID(),
    title: "بزرگ",
    size: "lg",
  },
  {
    id: randomUUID(),
    title: "متوسط",
    size: "md",
  },
  {
    id: randomUUID(),
    title: "خیلی بزرگ",
    size: "xl",
  },
]
const products = [
  {
    id: randomUUID(),
    title: "جوراب زنانه ماییلدا مدل 4216 بسته 5 عددی",
    label: "",
    hex: colors[0].hex,
    size_id: sizes[0].id,
    inventory: 2000,
    category_id: categories[0].id,
    thumbnail_url: "/products/03.jpg"
  },

  {
    id: randomUUID(),
    title: "تی شرت آستین کوتاه زنانه مدل سه خرس و نوشیدنی",
    label: "",
    hex: colors[1].hex,
    size_id: sizes[1].id,
    inventory: 2000,
    category_id: categories[1].id,
    thumbnail_url: "/products/02.jpg"
  },

  {
    id: randomUUID(),
    title: "هودی زنانه مدل فانتزی کره ای",
    label: "",
    hex: colors[2].hex,
    size_id: sizes[2].id,
    inventory: 2000,
    category_id: categories[2].id,
    thumbnail_url: "/products/01.jpg"
  },

  {
    id: randomUUID(),
    title: "شلوار جین زنانه ایزی دو مدل 6264990873",
    label: "",
    hex: colors[3].hex,
    size_id: sizes[3].id,
    inventory: 2000,
    category_id: categories[3].id,
    thumbnail_url: "/products/04.jpg"
  },
]
const invoices = [
  {
    id: randomUUID(),
    customer_id: customers[0].id,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    id: randomUUID(),
    customer_id: customers[1].id,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    id: randomUUID(),
    customer_id: customers[4].id,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    id: randomUUID(),
    customer_id: customers[3].id,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    id: randomUUID(),
    customer_id: customers[5].id,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    id: randomUUID(),
    customer_id: customers[2].id,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    id: randomUUID(),
    customer_id: customers[0].id,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    id: randomUUID(),
    customer_id: customers[3].id,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    id: randomUUID(),
    customer_id: customers[4].id,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    id: randomUUID(),
    customer_id: customers[5].id,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    id: randomUUID(),
    customer_id: customers[1].id,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    id: randomUUID(),
    customer_id: customers[5].id,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    id: randomUUID(),
    customer_id: customers[2].id,
    status: 'paid',
    date: '2022-06-05',
  },
];

const invoicesDetail = [
  {
    id: invoices[0].id,
    product_id: products[0].id,
    quantity: 10,
    color: "red",
    size: "md",
    price: 1_000_000
  }
]


const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];



export {
  users
  , customers
  , invoices
  , invoicesDetail
  , revenue
  , products
  , sizes
  , colors
  , categories
};
