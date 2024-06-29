"use client"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const Button = ({ children, className, ...rest }) => <button {...rest} className={clsx("hover:bg-Purple/10 hover:text-Purple rounded-full p-2 transition-colors", className)}>
    {children}
</button>

export const Input = ({ children, classname, ...rest }) => {
    return (
        <>
            <label>{children}</label>
            <input {...rest} className={clsx(classname, { "text-Fuchsia hover:bg-Purple/10 hover:text-Purple  rounded-xl p-2 cursor-pointer focus-visible:outline-dashed": rest.type == "submit" })} />
        </>
    )
}

export const NavLink = ({ children, className, href, ...rest }) => {
    const pathname = usePathname()
    return (
        <Link href={href}  {...rest} className={clsx("text-Fuchsia hover:bg-Purple/10 hover:text-Purple rounded-xl p-2", className, { "font-bold text-Purple child:stroke-Purple": href == pathname })}>
            {children}
        </Link>
    )
}