
import cover from "/public/products/01.webp"
import Image from "next/image"
import Content from "@templates/register/Content"
import Link from "next/link"
import { getPayload } from "@/lib/auth/session"
import { redirect } from "next/navigation"
export const metadata = {
    title: "ورود | ثبت نام"
}
export default async function page() {
    const payload = await getPayload()
    if (payload) redirect("/")
    return (
        <main className="md:min-h-screen md:flex flex-col justify-center items-center space-y-4">
            <Link href="/" className=" text-4xl text-center">
                LOGO
            </Link>
            <div className="bg-white rounded-xl overflow-hidden flex  gap-2 items-center">
                <Content />
                <Image
                    placeholder="blur"
                    src={cover}
                    alt="register page image "
                    height={560}
                    width={420}
                    className="disabled-drag hidden md:block"
                    priority={true}
                    
                />
            </div>
        </main>
    )
}
