"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const Button = ({ children, className, ...rest }) => {
    // return <button {...rest} className={`button transition-colors ${className}`}>{children}</button>
    return (
        <button {...rest} className={` text-Fuchsia hover:bg-Purple/10 hover:text-Purple rounded-xl p-2 ${className}`}>{children}</button>
    )
}


export const Input = ({ children, className, label, ...rest }) => {
    return rest.type === "submit" ?
        (
            <input {...rest}
                className="w-full bg-Purple hover:bg-dark-purple text-white p-2 my-1 rounded-md min-w-24 cursor-pointer font-morabba"
            />
        )
        : rest.type === "textArea" ? (
            <div >
                <label className="block">{label}</label>
                <input {...rest} />
            </div>
        )
            :

            (
                <div>
                    <label className="font-morabba">
                        {label}
                    </label>
                    <div
                        className={`h-10 flex  items-center justify-between px-1  bg-Fuchsia/10 my-1  rounded-lg ${className}`} >
                        <input {...rest}
                            className="w-full mx-2  bg-transparent outline-none focus-visible:border-b-2 border-Fuchsia/30 font-dana" />
                        {children}
                    </div>
                </div>

            )
}

export const InputRadio = ({ className, ...rest }) => {
    const color = (
        <input
            {...rest}
            type="radio"
            className={`rounded-md border border-solid border-gray appearance-none ring-offset-1 ring-Purple/80 checked:ring ${className}`}
            style={{ backgroundColor: rest.color }}
            name={rest.name} />
    )
    const size = (
        <label className="relative">
            <input {...rest} type="radio" className="peer appearance-none absolute" name={rest.name} />
            <span className={`block  text-center rounded-md ring-offset-1 ring-Purple/80 peer-checked:ring ${className}`} >{rest.label}</span>
        </label>
    )
    return rest.color ? color : size
}

export const NavLink = ({ children, href, className, ...rest }) => {
    const pathname = usePathname()
    return (
        <Link href={href}  {...rest} className={`text-Fuchsia hover:bg-Purple/10 hover:text-Purple rounded-xl p-2 ${href == pathname ? "font-bold text-Purple child:stroke-Purple" : ""} ${className}`}>
            {children}
        </Link>
    )
}