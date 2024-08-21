import Navbar from "@templates/layout/navbar/Navbar";
import Footer from "@templates/layout/Footer";
export default function layout({ children }) {
    return (
        <div className=" before:h-10 before:md:h-12 after:h-12 md:after:content-none py-1 md:container flex flex-col justify-end md:justify-between  min-h-dvh space-y-2">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}