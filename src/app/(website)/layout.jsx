import Navbar from "@/app/components/templates/layout/Navbar";
import Footer from "@/app/components/templates/layout/Footer";

const layout = ({ children }) => {
    return (
        <div className="md:container  flex flex-col justify-between min-h-screen ">
            <Navbar />
            <div className="mt-14 md:mt-16 w-full">
                {children}
            </div>
            <Footer className="my-12" />
        </div>
    )
}

export default layout