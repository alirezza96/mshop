import Navbar from "@/components/templates/(admin-p)/Navbar"
import SideNav from "@/components/templates/(admin-p)/SideNav"
import Footer from "@/components/templates/(admin-p)/Footer"
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