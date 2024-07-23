"use server"

import { randomUUID } from "crypto"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"
import path from "path"
import { writeFile } from "fs/promises"
import { comparePassword, generateToken, tokenPayload } from "@/app/lib/auth"
import { cookies } from "next/headers"
//invoices
const InvoiceFormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'انتخاب مشتری اجباری است.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'مقدار وارد شده باید بیشتر از 0 باشد.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'لطفا وضعیت سفارش را مشخص کنید.',
  }),
  date: z.string(),
});

const CreateInvoice = InvoiceFormSchema.omit({ id: true, date: true });
const UpdateInvoice = InvoiceFormSchema.omit({ date: true, id: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'خطا',
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/admin/invoices');
  redirect('/admin/invoices');
}
export async function updateInvoice(id: string, prevState: State, formData: FormData) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status")
  })
  if (!validatedFields.success) {
    return {
      message: "Missing Fields. Failed to Create Invoice.",
      errors: validatedFields.error.flatten().fieldErrors
    }
  }
  const { customerId, amount, status } = validatedFields.data
  try {
    await sql`
      UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amount}, status = ${status}
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

//products
const ProductFormSchema = z.object({
  id: z.string(),
  fa: z.string({
    invalid_type_error: "وارد کردن نام محصول اجباری است."
  }),
  en: z.string({
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
    fa: formData.get("fa"),
    en: formData.get("en"),
    thumbnailUrl: formData.get("thumbnailUrl").name,
    categoryId: formData.get("categoryId"),
  }
  const validatedFields = CreateProduct.safeParse(data)
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "err"
    }
  }
  const { fa, en, categoryId, thumbnailUrl } = validatedFields.data
  try {
    await sql`
    INSERT INTO products (fa,en, category_id, thumbnail_url) VALUES
    (${fa},${en},${categoryId},${thumbnailUrl})
`
  } catch (err) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    }
  }
  revalidatePath("/admin/products")
  redirect("admin/products")
}

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
  const newImageName = img ? `${img.lastModified}_${img.name}` : null
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
    if (img) {
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

const createOrderFormSchema = z.object({
  color: z.string({
    invalid_type_error: "رنگبندی را مشخص کنید"
  }),
  size: z.string({
    invalid_type_error: "سایز را مشخص کنید"
  })
})
export const createOrder = async (id: string, prevState: State, formData: FormData) => {
  const data = {
    color: formData.get("color"),
    size: formData.get("size")
  }
  const validatedFields = createOrderFormSchema.safeParse(data)
  if (!validatedFields.success) {
    return {
      message: "لطفا مواردی که مشخص شده را تکمیل کنید",
      errors: validatedFields.error.flatten().fieldErrors
    }
  }
  const { color, size } = validatedFields.data
  const payload = await tokenPayload()
  if (!payload) return redirect("/register")
  try {
    // is pending invoices exists
    const data = await sql`
      SELECT id FROM invoices 
       WHERE customer_id = ${payload.id}
       AND status = 'pending'
    `
    const invoice = data.rows[0]
    const invoiceId = randomUUID()
    const date = new Date().toISOString().split("T")[0]
    if (!invoice) {
      await sql`
      INSERT INTO invoices (id, customer_id, status, date)
      VALUES (${invoiceId} ,${payload.id}, 'pending'  , ${date})
      `
    } else {
      await sql`
      UPDATE invoices SET date = ${date}
       WHERE customer_id= ${payload.id} 
       AND status= 'pending'
      `
    }
    await sql`
    INSERT INTO invoices_detail (id, product_id , price, quantity, size, color)
    VALUES (${invoice ? invoice.id : invoiceId},${id}, 1 , 1 , ${size}, ${color})
    `
    console.log("invoice id =>", invoice ? invoice.id : invoiceId)
  } catch (error) {
    console.error("Database error =>", error)
    return {
      message: "Database error => create order failed."
    }
  }
  revalidatePath("/")
}

// authenticate
const authenticateFormSchema = z.object({
  email: z
    .string()
    .email("ایمیل وارد شده نامعتبر است."),
  password: z.string()
    .min(4, "حداقل رمز عبور 4 حرف میباشد")
    .max(8, "حداکثر رمز عبور 8 حرف میباشد")
})
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  const validatedFields = authenticateFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  })
  if (!validatedFields.success) {
    return {
      message: "لطفا مواردی که مشخص شده را تکمیل کنید",
      errors: validatedFields.error.flatten().fieldErrors
    }
  }
  const { email, password } = validatedFields.data
  try {
    const data = await sql`
      SELECT * FROM users WHERE email = ${email}
    `
    const user = data.rows[0]
    // is user exists?
    if (!user) {
      return {
        message: "نام کاربری یا رمز عبور اشتباه است"
      }
    }
    // check password
    const comparedPassword = await comparePassword(password, user.password)
    if (!comparedPassword) {
      return {
        message: "نام کاربری یا رمز عبور اشتباه است"
      }
    }
    // generate token
    const token = generateToken({ id: user.id, email: user.email })
    const cookie = cookies()
    cookie.set("token", token, { httpOnly: true, path: "/" })
  } catch (error) {
    console.error("Database error =>", error)
    return {
      message: "Database Error"
    }
  }
  redirect("/dashboard")
}

// logout
export const logout = () => {
  cookies().delete("token")
  redirect("/")
}

