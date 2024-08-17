
import cover from "/public/products/01.webp"
import Image from "next/image"
import LoginForm from "@templates/register/LoginForm"
import RegisterForm from "@templates/register/RegisterForm"
import { tokenPayload } from "@/lib/auth"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import Link from "next/link"

export const metadata = {
    title: "ورود | ثبت نام"
}


export default async function page() {
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    const payload = await tokenPayload(token)
    if (payload) redirect("/dashboard")

    const isRegister = false
    return (
        <div className=" flex items-end md:items-center justify-center h-svh">
            <div className="bg-white rounded-xl overflow-hidden flex gap-2 items-center grow  md:grow-0">
                <div>
                    {
                        isRegister ? <LoginForm /> : <RegisterForm/>
                    }
                    <div className="text-sm text-center ">
                        <span>
                            حساب کاربری ندارید؟
                            <Link href={"#"} className="text-Fuchsia font-bold">
                                ساخت حساب کاربری
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="hidden md:block ">
                    <Image
                        src={cover}
                        alt="register page image"
                        height={560}
                        width={420}
                        className="disabled-drag "
                        priority={true}
                    />
                </div>
            </div>
        </div>
    )
}
