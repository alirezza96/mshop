"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const Button = ({ children, className, ...rest }) =>{
    // return <button {...rest} className={`button transition-colors ${className}`}>{children}</button>
    return (
        <button {...rest} className={`text-Fuchsia hover:bg-Purple/10 hover:text-Purple rounded-xl p-2 ${className}`}>{children}</button>
    )
}


export const Input = ({ children, className, ...rest }) => {

    return (
        <>
            <label>{children}</label>
            <input {...rest} className={`${className} ${rest.type == "submit" ? "button cursor-pointer focus-visible:outline-dashed" : ""}`} />
        </>
    )
}

export const InputRadio = ({ className, ...rest }) => {
    const color = (
        <input
            {...rest}
            type="radio"
            className={`rounded-sm border border-solid border-gray appearance-none ring-offset-1 ring-Purple/80 checked:ring ${className}`}
            style={{ backgroundColor: rest.color }}
            name={rest.name} />
    )
    const size = (
        <label className="relative">
            <input {...rest} type="radio" className="peer appearance-none absolute" name={rest.name} />
            <span className={`block  text-center rounded-sm ring-offset-1 ring-Purple/80 peer-checked:ring ${className}`} >{rest.label}</span>
        </label>
    )
    return rest.color ? color : size
}

export const NavLink = ({ children, href, ...rest }) => {
    const pathname = usePathname()
    return (
        <Link href={href}  {...rest} className={`text-Fuchsia hover:bg-Purple/10 hover:text-Purple rounded-xl p-2 ${href == pathname ? "font-bold text-Purple child:stroke-Purple" : ""}`}>
            {children}
        </Link>
    )
}