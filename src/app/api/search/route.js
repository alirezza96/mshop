import { sql } from "@vercel/postgres"

export const POST = async (req) => {
    try {
        const { q: query } = await req.json()
        const products = await sql`
        SELECT  * FROM products
         WHERE fa LIKE ${`%${query}%`}
         LIMIT 10
        `
        const categories = await sql`
        SELECT c.name, c.en, c.id, count(1) as products_count FROM products as p
        LEFT OUTER JOIN categories as c 
            on c.id = p.category_id
        WHERE p.name LIKE ${`%${query}%`}
        GROUP BY c.name, c.en, c.id
        `
        return Response.json({
            message: "products fetch successfully",
            data: { products: products.rows, categories: categories.rows }
        },
            { status: 200 })

    } catch (error) {
        console.log("error =>", error)
        return Response.json({ message: `internal server error: ${err.message}` }, { status: 500 })
    }
}