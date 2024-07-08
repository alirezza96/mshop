"use server"

import { randomUUID } from "crypto"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const createProducts = async (formData) => {
    const { fa, en, category_id, thumbnail_url } = {
        fa: formData.get("fa"),
        en: formData.get("en"),
        category_id: formData.get("categoryId"),
        thumbnail_url: formData.get("thumbnailUrl"),
    }
    const id = randomUUID()
    await sql`insert into products(id,fa,en,category_id,thumbnail_url)
        values (${id},${fa},${en},${category_id},${thumbnail_url})
    `
    revalidatePath("/products")
    redirect("/products")
}

export const createCustomer = async (formData) => {
    const rawFormData = {
        name: formData.get("name"),
        email: formData.get("email"),
        image_url: formData.get("imageUrl").name
    }
    console.log("rawFormData =>", rawFormData)

}
