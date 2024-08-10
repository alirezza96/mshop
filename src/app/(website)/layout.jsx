import Navbar from "@templates/layout/navbar/Navbar";
import Footer from "@templates/layout/Footer";

const layout = ({ children }) => {
    return (
        <div className="before:h-12 before:md:h-14   md:container flex flex-col justify-between min-h-screen">
            <Navbar />
            {children}
            <Footer className="mb-12"/>
        </div>
    )
}

export default layout