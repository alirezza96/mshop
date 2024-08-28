import { sql } from "@vercel/postgres"

export const fetchImagesById = async (productId) => {
    try {
    // await new Promise((resolve) => setTimeout(resolve, 10000));

        const data = await sql`
            select * from images where product_id = ${productId}
        `
        const images = data.rows
        return images
    } catch (error) {
        console.error("Database error (fetchImagesById) =>", error)
        throw new Error("Database failed to fetch images")
    }
}