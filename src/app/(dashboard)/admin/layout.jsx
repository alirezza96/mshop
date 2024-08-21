import Navbar from "@templates/(admin-p)/Navbar"
import SideNav from "@templates/(admin-p)/SideNav"
import Footer from "@templates/(admin-p)/Footer"
// import { tokenPayload } from "@/lib/auth"
// import { sql } from "@vercel/postgres"
// import { notFound } from "next/navigation"
export default async function layout({ children }) {
    // // isAdmin ?
    // const token = await tokenPayload()
    // if(!token) return notFound()
    // const users = await sql`
    //     SELECT role FROM users where id=${token.id} and is_ban=false limit 1
    // `
    // const isAdmin = users.rows[0].role === "admin"
    // if(!isAdmin) return notFound()

    return (
        <main className="flex flex-col justify-between min-h-screen ">
            <div>
                <Navbar />
                <div className="flex">
                    <div className="basis-32">
                        <SideNav />
                    </div>
                    {children}
                </div>
            </div>
            <Footer />
        </main>
    )
}