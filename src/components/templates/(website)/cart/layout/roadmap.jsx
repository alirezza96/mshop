"use client"
import { usePathname } from "next/navigation"
export default function Roadmap() {
    const focus = false
    const breadcrumb = [
        { label: "اطلاعات سفارش", href: "/cart" },
        { label: "اطلاعات ارسال", href: "/cart/shipping-method" },
        { label: "پرداخت", href: "/cart/payment" },
    ]
    const pathname = usePathname()
    return (
        <ol className="font-morabba  text-sm w-[80%] my-8  mx-auto flex justify-between  text-center">
            {
                breadcrumb?.map((item, index) => (
                    <li
                        key={index + 1}
                        className={pathname === item.href ? "scale-105" : "scale-95 grayscale text-black/60"}
                    >
                        <div className="w-6 leading-6 bg-pink/30 rounded-full mx-auto">{index + 1}</div>
                        <div>{item.english_name}</div>
                    </li>

                ))
            }
        </ol>
    )
}

