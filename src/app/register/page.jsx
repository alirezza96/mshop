
import cover from "/public/products/01.webp"
import Image from "next/image"
import { tokenPayload } from "@/lib/auth"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import Content from "@templates/register/Content"
export const metadata = {
    title: "ورود | ثبت نام"
}


export default async function page() {
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    const payload = await tokenPayload(token)
    if (payload) redirect("/dashboard")

    return (
        <div className=" flex items-end md:items-center justify-center h-svh">
            <div className="bg-white rounded-xl overflow-hidden flex gap-2 items-center grow  md:grow-0">
                <Content />
                <Image
                    src={cover}
                    alt="register page image"
                    height={560}
                    width={420}
                    className="disabled-drag hidden md:block"
                    priority={true}
                />
            </div>
        </div>
    )
}
