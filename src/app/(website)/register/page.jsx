
import cover from "/public/products/01.webp"
import Image from "next/image"
import RegisterForm from "@/app/components/templates/register/RegisterForm"
import { tokenPayload } from "@/app/lib/auth"
import { redirect } from "next/navigation"

export const metadata = {
    title: "ورود | ثبت نام"
}


export default async function page() {
    const payload = await tokenPayload()
    if (payload) redirect("/dashboard")


    return (
        <div className=" flex justify-between items-center">
            <RegisterForm />
            <div className="hidden md:block">
                {
                    cover ?
                        <Image
                            src={cover}
                            alt="image product"
                            height={560}
                            width={420}
                            className="disabled-drag rounded-xl"
                            priority={true}
                        />

                        :
                      null
                }
            </div>
        </div>
    )
}
