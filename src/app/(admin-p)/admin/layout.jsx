import Navbar from "@/app/components/templates/(admin-p)/Navbar"
import SideNav from "@/app/components/templates/(admin-p)/SideNav"
import Footer from "@/app/components/templates/(admin-p)/Footer"
import { tokenPayload } from "@/app/lib/auth"
import { redirect } from "next/navigation"
export default async function layout({ children }){
    const payload = await tokenPayload()
    if(payload.role !== "admin") redirect("/dashboard")
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