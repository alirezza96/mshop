import { sql } from "@vercel/postgres"

export const POST = async (req) => {
    try{
        const {q} = await req.json()
        console.log("q =>", q)
        const products = await sql`
        SELECT * FROM products WHERE fa LIKE ${`%${q}%`}
        `
        console.log("q =>", products.rows)
        return Response.json({ message: "products fetch successfully" , products: products.rows  }, { status: 200 })

    }catch(error){
        console.log("error =>", error)
        return Response.json({ message: `internal server error: ${err.message}` }, { status: 500 })
    }
}