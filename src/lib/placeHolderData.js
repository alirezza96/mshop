// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

import { randomUUID } from "crypto";
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: randomUUID(),
    name: 'admin',
    email: 'admin@admin.com',
    role: "admin",
    password: '1234',
    isBan: false
  },
  {
    id: randomUUID(),
    name: 'user',
    email: 'user@user.com',
    role: "user",
    password: '1234',
    isBan: false
  },
  {
    id: randomUUID(),
    name: 'customer',
    email: 'customer@customer.com',
    role: "user",
    password: '1234',
    isBan: false
  },
  {
    id: randomUUID(),
    name: 'ban',
    email: 'ban@ban.com',
    role: "user",
    password: '1234',
    isBan: true
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
    name: 'جوراب',
    english_name: 'tights',
  },
  {
    id: randomUUID(),
    name: 'تیشرت',
    english_name: 'tee-shirt',
  },
  {
    id: randomUUID(),
    name: 'هودی',
    english_name: 'hoodies',
  },
  {
    id: randomUUID(),
    name: 'جین',
    english_name: 'jeans',
  },
];

const colors = [
  {
    name: "زرد",
    color: "ffff00",
  },
  {
    name: "قرمز",
    color: "ff0000",
  },
  {
    name: "صورتی",
    color: "ff00ff",
  },
  {
    name: "فیروزه ای",
    color: "00ffff",
  },
]
const sizes = [
  {
    name: "کوچک",
    size: "sm",
  },
  {
    name: "بزرگ",
    size: "lg",
  },
  {
    name: "متوسط",
    size: "md",
  },
  {
    name: "خیلی بزرگ",
    size: "xl",
  },
]

const products = [
  {
    id: randomUUID(),
    name: "جوراب زنانه ماییلدا مدل 4216 بسته 5 عددی",
    english_name: "",
    thumbnail_url: "/products/03.jpg"
  },

  {
    id: randomUUID(),
    name: "تی شرت آستین کوتاه زنانه مدل سه خرس و نوشیدنی",
    english_name: "",
    thumbnail_url: "/products/02.jpg"
  },

  {
    id: randomUUID(),
    name: "هودی زنانه مدل فانتزی کره ای",
    english_name: "",
    thumbnail_url: "/products/01.jpg"
  },

  {
    id: randomUUID(),
    name: "شلوار جین زنانه ایزی دو مدل 6264990873",
    english_name: "",
    thumbnail_url: "/products/04.jpg"
  },
]

const productVariants = [
  {
    product_id: products[0].id,
    color_id: 1,
    size_id: 1,
    inventory: 50
  },
  {
    product_id: products[0].id,
    color_id: 2,
    size_id: 2,
    inventory: 0
  },
  {
    product_id: products[0].id,
    color_id: 1,
    size_id: 2,
    inventory: 30
  },
  {
    product_id: products[1].id,
    color_id: 1,
    size_id: 2,
    inventory: 30
  },
  {
    product_id: products[1].id,
    color_id: 2,
    size_id: 2,
    inventory: 0
  },
  {
    product_id: products[1].id,
    color_id: 1,
    size_id: 2,
    inventory: 30
  },
  {
    product_id: products[2].id,
    color_id: 2,
    size_id: 1,
    inventory: 20
  },
  {
    product_id: products[2].id,
    color_id: 2,
    size_id: 2,
    inventory: 0
  },
  {
    product_id: products[2].id,
    color_id: 1,
    size_id: 2,
    inventory: 30
  },
  {
    product_id: products[3].id,
    color_id: 2,
    size_id: 2,
    inventory: 10
  },
  {
    product_id: products[3].id,
    color_id: 2,
    size_id: 2,
    inventory: 0
  },
  {
    product_id: products[3].id,
    color_id: 1,
    size_id: 2,
    inventory: 30
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


const images = [
  {
    name: "a01",
    src: "/products/a01.png",
    is_default: true,
    is_thumbnail:true,
    product_id: products[0].id
  },
  {
    name: "a02",
    src: "/products/a02.jpg",
    is_default: false,
    is_thumbnail:false,
    product_id: products[0].id
  },
  {
    name: "a03",
    src: "/products/a03.jpg",
    is_default: false,
    is_thumbnail:false,
    product_id: products[0].id
  },
  {
    name: "a04",
    src: "/products/a04.jpg",
    is_default: false,
    is_thumbnail:false,
    product_id: products[0].id
  },
  {
    name: "a05",
    src: "/products/a05.jpg",
    is_default: false,
    is_thumbnail:false,
    product_id: products[0].id
  },
  {
    name: "a06",
    src: "/products/a06.png",
    is_default: false,
    is_thumbnail:false,
    product_id: products[0].id
  },
  {
    name: "a07",
    src: "/products/a07.jpg",
    is_default: false,
    is_thumbnail:false,
    product_id: products[0].id
  },
  {
    name: "a08",
    src: "/products/a08.png",
    is_default: false,
    is_thumbnail:false,
    product_id: products[0].id
  },
]


export {
  users
  , customers
  , invoices
  , invoicesDetail
  , revenue
  , products
  , productVariants
  , sizes
  , colors
  , categories
  , images
};
