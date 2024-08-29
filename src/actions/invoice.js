"use server"
import { verifySession } from "@/lib/auth/session"
import { Schema } from "../schema/invoice"
import { sql } from "@vercel/postgres"
import { formatDateToLocal } from "@/lib/utils"
import { revalidateTag } from "next/cache"
export async function createInvoice(productId, prevState, formData) {
    const data = {
        color: formData.get("c"), // color
        size: formData.get("s") // size
    }
    const validationResult = Schema.safeParse(data)
    if (!validationResult.success) {
        return {
            message: "انتخاب سایز و رنگ اجباری است",
            errors: validationResult.error.flatten().fieldErrors
        }
    }
    const { color, size } = validationResult.data
    const payload = await verifySession()
    const userId = payload?.userId


    try {
        const result = await sql`
            SELECT * FROM invoices 
            WHERE user_id = ${userId}
            and status='pending'
        `
        const invoices = result.rows
        const shamsiDate = formatDateToLocal(new Date)
        if (!result.rowCount) {
            const createInvoiceHeader = await sql`
            INSERT INTO invoices(user_id, status, date)
            VALUES(${userId},'pending',${shamsiDate})
            RETURNING id
            `
            var id = createInvoiceHeader.rows[0].id
            console.log("createInvoiceDetail =>", id)
        } else {
            const updateInvoiceDetail = await sql`
            UPDATE invoices 
            SET date=${shamsiDate}
            WHERE user_id=${userId}
            and status='pending'
            RETURNING id
            `
            id = updateInvoiceDetail.rows[0].id
            console.log("updateInvoiceDetail =>", id)

        }
        const createInvoiceDetail = await sql`
                INSERT INTO invoices_detail(id, product_id, price,quantity, size, color)
                VALUES(${id},${productId},${10000},${1},${size},${color})
            `
        if (!createInvoiceDetail) return {
            message: "لطفا دوباره سعی کنید"
        }
        return {
            message: "خریدت با موفقیت به سبد خرید اضافه شد",
            status: true
        }

    } catch (error) {
        // If a database error occurs, return a more specific error.
        console.error("database error (createInvoice) =>", error)
        return {
            message: 'Database Error: Failed to Create Invoice.'
        };
    }
    revalidateTag()
    // revalidatePath("/")
}