"use server"

import { randomUUID } from "crypto"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { isValid, z } from "zod"
import path from "path"
import { writeFile } from "fs/promises"
import { comparePassword, generateToken, hashPassword, tokenPayload } from "@/lib/auth"
import { cookies, headers } from "next/headers"
import { formatDateToLocal } from "./utils"
//invoices
const InvoiceFormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'انتخاب مشتری اجباری است.',
  }),
  quantity: z.coerce
    .number()
    .gt(0, { message: 'مقدار وارد شده باید بیشتر از 0 باشد.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'لطفا وضعیت سفارش را مشخص کنید.',
  }),
  color: z.string({
    invalid_type_error: "رنگبندی را مشخص کنید"
  }),
  size: z.string({
    invalid_type_error: "سایز را مشخص کنید"
  }),
  date: z.string(),
});

const CreateInvoiceByCustomer = InvoiceFormSchema.omit(
  {
    id: true,
    date: true,
    status: true,
    quantity: true,
    customerId: true
  }
)
const UpdateInvoice = InvoiceFormSchema.omit({ date: true, id: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(productId: string, prevState: State, formData: FormData) {
  const header = headers()
  // Validate form using Zod
  const data = {
    color: formData.get("color"),
    size: formData.get("size")
  }
  const validateFields = CreateInvoiceByCustomer.safeParse(data)
  if (!validateFields.success) {
    return {
      message: "انتخاب سایز و رنگ اجباری است",
      errors: validateFields.error.flatten().fieldErrors
    }
  }
  const { color, size } = validateFields.data
  const payload = await tokenPayload()
  const pathname = header.get("referer")
  if (!payload) {
    return redirect(`/register?fallback=${pathname}`)
  }
  const customerId = payload.id
  try {
    // if invoice exists, update values
    const invoice = await sql`
    SELECT * FROM invoices 
    WHERE status = 'pending'
    AND customer_id = ${customerId}
    `
    const invoiceId = { id: invoice.rows[0]?.id }
    const jalaaliDate = formatDateToLocal(new Date())
    if (invoice.rowCount > 0) {
      await sql`
      UPDATE invoices
      SET date = ${jalaaliDate}
      WHERE id = ${invoiceId.id}
      `
    } else {
      const newInvoice = await sql`
        INSERT INTO invoices(customer_id, status, date)
        VALUES(${customerId},'pending',${jalaaliDate})
        RETURNING id
      `
      invoiceId.id = newInvoice.rows[0].id
    }
    const invoiceDetail = await sql`
      INSERT INTO invoices_detail (id,product_id, price, quantity, size, color)
        VALUES (${invoiceId.id},${productId},1000,1,${size},${color})
    `
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
  revalidatePath("/")
}


export async function updateInvoice(id: string, prevState: State, formData: FormData) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get("customerId"),
    status: formData.get("status")
  })
  if (!validatedFields.success) {
    return {
      message: "Missing Fields. Failed to Create Invoice.",
      errors: validatedFields.error.flatten().fieldErrors
    }
  }
  const { customerId, status } = validatedFields.data
  try {
    await sql`
      UPDATE invoices
        SET customer_id = ${customerId}, status = ${status}
        WHERE id = ${id}
    `
  } catch (error) {
    return {
      message: "Database Error: Failed to Edit Invoice."
    }
  }

  revalidatePath("/admin/invoices")
  redirect("/admin/invoices")

}
// website 
export async function updateInvoiceQuantity(id: string, productId: string, amount: number) {
  console.log("props =>", id, productId, amount)
  try {
    const invoice = await sql`
      UPDATE invoices_detail SET quantity = quantity + ${amount}
        WHERE id = ${id}
        AND product_id = ${productId}
        RETURNING quantity
    `
    console.log("invoice res =>", invoice)
  } catch (error) {
    console.error("Database Error (updateInvoiceQuantity) =>", error)
    return {
      message: "Database Error: Failed to Edit Invoice Quantity."
    }
  }
  revalidatePath("/cart")
}

export async function deleteInvoice(id: string) {
  // throw new Error('Failed to Delete Invoice');
  try {
    await sql`
    DELETE FROM invoices WHERE id = ${id}
  `
    revalidatePath("/admin/invoices")
    return {
      message: "Deleted Invoice."
    }
  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Invoice."
    }
  }

}

export async function isFavoriteAction(isFavorite: boolean, product_id: string, user_id: string) {
  try {
    if (isFavorite) {
      console.log(product_id, user_id, 1)
      await sql`
      INSERT INTO favorites (product_id, user_id)
      VALUES(${product_id}, ${user_id})
      `
    } else {
      console.log(product_id, user_id, 2)
      await sql`
      DELETE FROM favorites WHERE
      product_id = ${product_id} 
      and user_id = ${user_id}
    `
    }
  } catch (error) {
    return {
      message: "Database Error: Failed to favorite product."
    }
  }
  console.log("create function fired isFavorite =>", isFavorite)
  console.log("create function fired product_id =>", product_id)
  console.log("create function fired user_id =>", user_id)
}

//products
const ProductFormSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: "وارد کردن نام محصول اجباری است."
  }),
  english_name: z.string({
    invalid_type_error: "وارد کردن نام محصول اجباری است."
  }),
  categoryId: z.string({
    invalid_type_error: "وارد کردن دسته بندی اجباری است."
  }),
  thumbnailUrl: z.string({
    invalid_type_error: "عکس محصول را وارد کنید."
  }),

})
const CreateProduct = ProductFormSchema.omit({ id: true })

export const createProduct = async (prevState: State, formData: FormData) => {
  const data = {
    name: formData.get("name"),
    english_name: formData.get("english_name"),
    thumbnailUrl: "/",
    categoryId: formData.get("categoryId"),
  }

  const validatedFields = CreateProduct.safeParse(
    data
  )
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "err"
    }
  }
  const { name, english_name, categoryId, thumbnailUrl } = validatedFields.data
  try {
    await sql`
    INSERT INTO products (name,english_name, category_id, thumbnail_url) VALUES
    (${name},${english_name},${categoryId},${thumbnailUrl})
`
  } catch (err) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    }
  }
  revalidatePath("/admin/products")
  redirect("admin/products")
}
// update invoice quantity

// products
// export const createProducts = async (formData: FormData) => {
//     const { fa, en, category_id, thumbnail_url } = {
//         fa: formData.get("fa"),
//         en: formData.get("en"),
//         category_id: formData.get("categoryId"),
//         thumbnail_url: formData.get("thumbnailUrl"),
//     }
//     const id = randomUUID()
//     await sql`insert into products(id,fa,en,category_id,thumbnail_url)
//         values (${id},${fa},${en},${category_id},${thumbnail_url})
//     `
//     revalidatePath("/products")
//     redirect("/products")
// }


export const updateProduct = (formData: FormData) => {
  const data = Object.fromEntries(formData.entries())
  console.log("formData fired 🎆 =>", data)
}





// // customers
// export const createCustomer = async (formData: FormData) => {
//     const rawFormData = {
//         id: randomUUID(),
//         name: formData.get("name"),
//         email: formData.get("email"),
//         image_url: "/public/customers/" + formData.get("imageUrl").name
//     }
//     await sql`INSERT INTO CUSTOMERS (Id, Name, Email, Image_Url)
//         VALUES (${rawFormData.id}, ${rawFormData.name}, ${rawFormData.email}, ${rawFormData.image_url} )
//     `
//     revalidatePath("/admin/customers")
//     redirect("/admin/customers")

// }


//customers
const customerFormSchema = z.object({
  name: z.string().min(5, "وارد کردن نام مشتری اجباری است"),
  email: z.string().email({ message: "ایمیل وارد شده نامعتبر است" }),
  imageUrl: z.string().optional()
})
const CreateCustomer = customerFormSchema;
export const createCustomer = async (formData: FormData) => {
  const img = formData.get("imageUrl")
  if (img && !(img instanceof File)) {
    return {
      message: "خطا",
      errors: { imageUrl: ["تصویر نامعتبر است"] },
    }
  }
  const newImageName = img instanceof File ? `${img.lastModified}_${img.name}` : null
  const validatedFields = CreateCustomer.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    imageUrl: newImageName
  })

  if (!validatedFields.success) {
    return {
      message: "خطا",
      errors: validatedFields.error.flatten().fieldErrors
    }
  }

  const { name, email, imageUrl } = validatedFields.data
  const newImgUrl = imageUrl ? `/customers/${imageUrl}` : null
  try {
    await sql`
 INSERT INTO customers (name, email, image_url)
        VALUES ( ${name}, ${email}, ${newImgUrl})
  `
    if (img instanceof File) {
      const pathname = path.join(process.cwd(), "public/customers", newImageName)
      const buffer = Buffer.from(await img.arrayBuffer())
      await writeFile(pathname, buffer)
    }
  } catch (error) {
    console.error('Database Error:', error);
    return {
      message: 'Database Error: Failed to Create Customer.',
    }
  }
  revalidatePath("/admin/customers")
  redirect("/admin/customers")
}



// authenticate
const authenticateFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "حداقل طول نام و نام خانوادگی 3 حرف میباشد")
  ,
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("ایمیل وارد شده نامعتبر است."),
  password: z.string()
    .min(4, "حداقل رمز عبور 4 حرف میباشد")
    .max(8, "حداکثر رمز عبور 8 حرف میباشد"),
  rePassword: z.string()
    .min(4, "حداقل رمز عبور 4 حرف میباشد")
    .max(8, "حداکثر رمز عبور 8 حرف میباشد")
})
const Login = authenticateFormSchema.omit({ name: true, rePassword: true })
const Register = authenticateFormSchema
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  const pathname = headers().get("referer")
  const url = new URL(pathname)
  const searchParams = new URLSearchParams(url.search)
  const data = {
    email: formData.get("email"),
    password: formData.get("password")
  }
  const validatedFields = Login.safeParse(data)
  if (!validatedFields.success) {
    return {
      message: "لطفا مواردی که مشخص شده را تکمیل کنید",
      errors: validatedFields.error.flatten().fieldErrors,
      email: data.email,
      password: data.password
    }
  }

  const { email, password } = validatedFields.data

  try {
    const users = await sql`
      SELECT id, email, password FROM users WHERE email = ${email}
      `
    const user = users.rows[0]
    // is user exists?
    if (!user) {
      return {
        message: "نام کاربری یا رمز عبور اشتباه است",
        email
      }
    }
    // check password
    const comparedPassword = await comparePassword(password, user.password)

    if (!comparedPassword) {
      return {
        message: "نام کاربری یا رمز عبور اشتباه است",
        email
      }
    }
    // generate token
    const token = generateToken({ id: user.id, email })
    const cookie = cookies()
    cookie.set("token", token, { httpOnly: true, path: "/" })
  } catch (error) {
    console.error("Database error (authenticate) =>", error)
    return {
      message: "Database Error"
    }
  }
  // if (searchParams.has("fallback")) return redirect(searchParams.get("fallback"))
  // redirect("/dashboard")
}
export async function register(
  prevState: string | undefined,
  formData: FormData,
) {
  const pathname = headers().get("referer")
  const url = new URL(pathname)
  const searchParams = new URLSearchParams(url.search)
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    rePassword: formData.get("rePassword"),
  }
  const validatedFields = Register.safeParse(data)
  if (!validatedFields.success) {
    return {
      message: "لطفا مواردی که مشخص شده را تکمیل کنید",
      errors: validatedFields.error.flatten().fieldErrors,
      name: data.name,
      email: data.email,
      password: data.password,
      rePassword: data.rePassword

    }
  }

  const { name, email, password, rePassword } = validatedFields.data
  if (password !== rePassword) {
    return {
      message: "رمز عبور یکسان نیست"
    }
  }
  try {
    const users = await sql`
      SELECT 1 FROM users WHERE email = ${email}
      `
    const user = users.rowCount
    // is user exists?
    if (user) {
      return {
        message: "این ایمیل قبلا در سایت ثبت نام کرده است",
        email
      }
    }
    // hash password
    const hashedPassword = await hashPassword(password)
    // is user
    const { rowCount: isUser } = await sql`
      SELECT 1 FROM users LIMIT 1
    `
    const newUser = await sql`
      INSERT INTO users (name ,email, password, role)
      VALUES (${name}, ${email}, ${hashedPassword}, ${isUser ? "user" : "admin"})
      RETURNING id
    `
    console.log("newUser =>", newUser)
    // generate token
    const token = generateToken({ id: newUser.rows[0].id, email })
    const cookie = cookies()
    cookie.set("token", token, { httpOnly: true, path: "/" })
  } catch (error) {
    console.error("Database error (register) =>", error)
    return {
      message: "Database Error (register)"
    }
  }
  // if (searchParams.has("fallback")) return redirect(searchParams.get("fallback"))
  // redirect("/dashboard")
}


// logout
export const logout = () => {
  cookies().delete("token")
  redirect("/")
}

