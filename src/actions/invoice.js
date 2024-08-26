"use server"
import { verifySession } from "@/lib/auth/session"
import { Schema } from "../schema/invoice"
import { sql } from "@vercel/postgres"
export async function createInvoice(productId, prevState, formData) {
    const data = {
        color: formData.get("color"),
        size: formData.get("size")
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

    // const pathname = header.get("referer")
    // if (!payload) {
    //     return redirect(`/register?fallback=${pathname}`)
    // }
    try {
    
    } catch (error) {
        // If a database error occurs, return a more specific error.
        console.error("database error (createInvoice) =>", error)
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }
    // revalidatePath("/")
}