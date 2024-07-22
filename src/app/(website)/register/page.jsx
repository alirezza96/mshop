
import cover from "/public/products/01.webp"
import Image from "next/image"
import RegisterForm from "@/app/components/templates/register/RegisterForm"
import { tokenPayload } from "@/app/lib/auth"
import { redirect } from "next/navigation"
export default async function page() {
    const payload = await tokenPayload()
    payload.role === "user" ?
        redirect("/dashboard")
        :
        redirect("/admin")


    return (
        <div className="max-w-screen-md mx-auto flex justify-between md:border border-solid rounded-lg border-Fuchsia/10 overflow-hidden">
            <RegisterForm />
            <div className="hidden md:block bg-Fuchsia/10 ">
                <Image
                    src={cover}
                    alt="image product"
                    height={560}
                    width={420}
                    className="disabled-drag "
                    priority={true}

                />
            </div>
        </div>
    )
}
