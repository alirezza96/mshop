import Navbar from "@templates/layout/navbar/Navbar";
import Footer from "@templates/layout/Footer";

const layout = ({ children }) => {
    return (
        <div className="md:container  flex flex-col justify-between min-h-screen ">
            <div>
                <Navbar />
                <div className="h-12 "></div>
                {children}
            </div>
            <Footer className="my-12" />
        </div>
    )
}

export default layout