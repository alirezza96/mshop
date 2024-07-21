// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

import { randomUUID } from "crypto";
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: randomUUID(),
    name: 'admin',
    email: 'admin@admin.com',
    password: '123456',
  },
];

const customers = [
  {
    id: randomUUID(),
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

const invoices = [
  {
    id: randomUUID(),
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    id: randomUUID(),
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    id: randomUUID(),
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    id: randomUUID(),
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    id: randomUUID(),
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    id: randomUUID(),
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    id: randomUUID(),
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    id: randomUUID(),
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    id: randomUUID(),
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    id: randomUUID(),
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    id: randomUUID(),
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    id: randomUUID(),
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    id: randomUUID(),
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const invoicesDetail = [
  {
    id: invoices[0].id,
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

const categories = [
  {
    id: randomUUID(),
    fa: 'جوراب',
    en: 'tights',
  },
  {
    id: randomUUID(),
    fa: 'تیشرت',
    en: 'tee-shirt',
  },
  {
    id: randomUUID(),
    fa: 'هودی',
    en: 'hoodies',
  },
  {
    id: randomUUID(),
    fa: 'جین',
    en: 'jeans',
  },
];


const products = [
  { id: randomUUID(), fa: "جوراب زنانه ماییلدا مدل 4216 بسته 5 عددی", en: "", category_id: categories[0].id, thumbnail_url: "/products/03.jpg" },
  { id: randomUUID(), fa: "تی شرت آستین کوتاه زنانه مدل سه خرس و نوشیدنی", en: "", category_id: categories[1].id, thumbnail_url: "/products/02.jpg" },
  { id: randomUUID(), fa: "هودی زنانه مدل فانتزی کره ای", en: "", category_id: categories[2].id, thumbnail_url: "/products/01.jpg" },
  { id: randomUUID(), fa: "شلوار جین زنانه ایزی دو مدل 6264990873", en: "", category_id: categories[3].id, thumbnail_url: "/products/04.jpg" },
  { id: randomUUID(), fa: "جوراب زنانه ماییلدا مدل 4216 بسته 5 عددی", en: "", category_id: categories[0].id, thumbnail_url: "/products/03.jpg" },
  { id: randomUUID(), fa: "تی شرت آستین کوتاه زنانه مدل سه خرس و نوشیدنی", en: "", category_id: categories[1].id, thumbnail_url: "/products/02.jpg" },
  { id: randomUUID(), fa: "هودی زنانه مدل فانتزی کره ای", en: "", category_id: categories[2].id, thumbnail_url: "/products/01.jpg" },
  { id: randomUUID(), fa: "شلوار جین زنانه ایزی دو مدل 6264990873", en: "", category_id: categories[3].id, thumbnail_url: "/products/04.jpg" },
  { id: randomUUID(), fa: "جوراب زنانه ماییلدا مدل 4216 بسته 5 عددی", en: "", category_id: categories[0].id, thumbnail_url: "/products/03.jpg" },
  { id: randomUUID(), fa: "تی شرت آستین کوتاه زنانه مدل سه خرس و نوشیدنی", en: "", category_id: categories[1].id, thumbnail_url: "/products/02.jpg" },
  { id: randomUUID(), fa: "هودی زنانه مدل فانتزی کره ای", en: "", category_id: categories[2].id, thumbnail_url: "/products/01.jpg" },
  { id: randomUUID(), fa: "شلوار جین زنانه ایزی دو مدل 6264990873", en: "", category_id: categories[3].id, thumbnail_url: "/products/04.jpg" },
  { id: randomUUID(), fa: "جوراب زنانه ماییلدا مدل 4216 بسته 5 عددی", en: "", category_id: categories[0].id, thumbnail_url: "/products/03.jpg" },
  { id: randomUUID(), fa: "تی شرت آستین کوتاه زنانه مدل سه خرس و نوشیدنی", en: "", category_id: categories[1].id, thumbnail_url: "/products/02.jpg" },
  { id: randomUUID(), fa: "هودی زنانه مدل فانتزی کره ای", en: "", category_id: categories[2].id, thumbnail_url: "/products/01.jpg" },
  { id: randomUUID(), fa: "شلوار جین زنانه ایزی دو مدل 6264990873", en: "", category_id: categories[3].id, thumbnail_url: "/products/04.jpg" },
  { id: randomUUID(), fa: "جوراب زنانه ماییلدا مدل 4216 بسته 5 عددی", en: "", category_id: categories[0].id, thumbnail_url: "/products/03.jpg" },
  { id: randomUUID(), fa: "تی شرت آستین کوتاه زنانه مدل سه خرس و نوشیدنی", en: "", category_id: categories[1].id, thumbnail_url: "/products/02.jpg" },
  { id: randomUUID(), fa: "هودی زنانه مدل فانتزی کره ای", en: "", category_id: categories[2].id, thumbnail_url: "/products/01.jpg" },
  { id: randomUUID(), fa: "شلوار جین زنانه ایزی دو مدل 6264990873", en: "", category_id: categories[3].id, thumbnail_url: "/products/04.jpg" },
  { id: randomUUID(), fa: "جوراب زنانه ماییلدا مدل 4216 بسته 5 عددی", en: "", category_id: categories[0].id, thumbnail_url: "/products/03.jpg" },
  { id: randomUUID(), fa: "تی شرت آستین کوتاه زنانه مدل سه خرس و نوشیدنی", en: "", category_id: categories[1].id, thumbnail_url: "/products/02.jpg" },
  { id: randomUUID(), fa: "هودی زنانه مدل فانتزی کره ای", en: "", category_id: categories[2].id, thumbnail_url: "/products/01.jpg" },
  { id: randomUUID(), fa: "شلوار جین زنانه ایزی دو مدل 6264990873", en: "", category_id: categories[3].id, thumbnail_url: "/products/04.jpg" },
  { id: randomUUID(), fa: "جوراب زنانه ماییلدا مدل 4216 بسته 5 عددی", en: "", category_id: categories[0].id, thumbnail_url: "/products/03.jpg" },
  { id: randomUUID(), fa: "تی شرت آستین کوتاه زنانه مدل سه خرس و نوشیدنی", en: "", category_id: categories[1].id, thumbnail_url: "/products/02.jpg" },
  { id: randomUUID(), fa: "هودی زنانه مدل فانتزی کره ای", en: "", category_id: categories[2].id, thumbnail_url: "/products/01.jpg" },
  { id: randomUUID(), fa: "شلوار جین زنانه ایزی دو مدل 6264990873", en: "", category_id: categories[3].id, thumbnail_url: "/products/04.jpg" },
  { id: randomUUID(), fa: "جوراب زنانه ماییلدا مدل 4216 بسته 5 عددی", en: "", category_id: categories[0].id, thumbnail_url: "/products/03.jpg" },
  { id: randomUUID(), fa: "تی شرت آستین کوتاه زنانه مدل سه خرس و نوشیدنی", en: "", category_id: categories[1].id, thumbnail_url: "/products/02.jpg" },
  { id: randomUUID(), fa: "هودی زنانه مدل فانتزی کره ای", en: "", category_id: categories[2].id, thumbnail_url: "/products/01.jpg" },
  { id: randomUUID(), fa: "شلوار جین زنانه ایزی دو مدل 6264990873", en: "", category_id: categories[3].id, thumbnail_url: "/products/04.jpg" },
  { id: randomUUID(), fa: "جوراب زنانه ماییلدا مدل 4216 بسته 5 عددی", en: "", category_id: categories[0].id, thumbnail_url: "/products/03.jpg" },
  { id: randomUUID(), fa: "تی شرت آستین کوتاه زنانه مدل سه خرس و نوشیدنی", en: "", category_id: categories[1].id, thumbnail_url: "/products/02.jpg" },
  { id: randomUUID(), fa: "هودی زنانه مدل فانتزی کره ای", en: "", category_id: categories[2].id, thumbnail_url: "/products/01.jpg" },
  { id: randomUUID(), fa: "شلوار جین زنانه ایزی دو مدل 6264990873", en: "", category_id: categories[3].id, thumbnail_url: "/products/04.jpg" },
]

export { users, customers, invoices, invoicesDetail, revenue, products, categories };
