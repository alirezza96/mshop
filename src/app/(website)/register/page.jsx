
import cover from "/public/products/01.webp"
import Image from "next/image"
import { tokenPayload } from "@/lib/auth/auth"
import { redirect } from "next/navigation"
import Content from "@templates/register/Content"
export const metadata = {
    title: "ورود | ثبت نام"
}


export default async function page() {
    const payload = await tokenPayload()
    if (payload) redirect("/dashboard")

    return (
        <div className="bg-white rounded-xl overflow-hidden flex  gap-2  md:mx-auto items-center ">
            <Content />
            <Image
                src={cover}
                alt="register page image "
                height={560}
                width={420}
                className="disabled-drag hidden md:block"
                priority={true}
            />
        </div>
    )
}
