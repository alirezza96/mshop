
import cover from "/public/products/01.webp"
import Image from "next/image"
import RegisterForm from "../components/templates/register/RegisterForm"
const page = () => {
    return (
        <div className="max-w-screen-md mx-auto flex justify-between md:border border-solid rounded-lg border-Fuchsia/10 overflow-hidden">
            <RegisterForm />
            <div className="hidden md:block bg-Fuchsia/10  ">
                <Image
                    src={cover}
                    alt="image product"
                    height={560}
                    width={420}
                    className="disabled-drag"
                />
            </div>
        </div>
    )
}

export default page