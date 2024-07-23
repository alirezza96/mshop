import Navbar from "@/app/components/templates/(admin-p)/Navbar"
import SideNav from "@/app/components/templates/(admin-p)/SideNav"
import Footer from "@/app/components/templates/(admin-p)/Footer"
export default async function layout({ children }){
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