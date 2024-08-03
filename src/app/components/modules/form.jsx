"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const Button = ({ children, className, ...rest }) => {
    const classname = `font-morabba  bg-Purple/10 hover:text-Purple hover:bg-Purple/20  rounded-xl p-2 text-sm  ${className}`
    // return <button {...rest} className={`button transition-colors ${className}`}>{children}</button>
    const elem = rest.href ?
        <Link className={classname} {...rest}>{children}</Link>
        :
        <button className={classname} {...rest}>{children}</button>
    return elem
}


export const Input = ({ children, className, label, ...rest }) => {
    return rest.type === "submit" ?
        (
            <input {...rest}
                className={`${className} bg-Purple hover:bg-dark-purple text-white p-2 my-1 rounded-md min-w-24 cursor-pointer font-morabba`}
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
                <>
                    <label htmlFor={rest.id} className="font-morabba">
                        {label}
                    </label>
                    <div
                        className={`h-10 flex  items-center justify-between   bg-Fuchsia/10 my-1  rounded-lg ${className}`} >
                        <input
                            {...rest}
                            id={rest.id}
                            className=" w-full mx-2  bg-transparent outline-none focus-visible:border-b-2 border-Fuchsia/30 font-dana" />
                        {children}
                    </div>
                </>

            )
}



export const Select = ({ label, className, children, ...rest }) => {
    return (
        <>
            <label htmlFor={rest.id} className="font-morabba">
                {label}
            </label>
            <select
                className={`h-10 px-2 flex  items-center justify-between   bg-Fuchsia/10 my-1  rounded-lg ${className}`}
                {...rest}
            >
                {children}
            </select>
        </>
    )
}

export const NavLink = ({ children, href, className, ...rest }) => {
    const pathname = usePathname()
    return (
        <Link href={href}  {...rest} className={`text-Fuchsia hover:bg-Purple/10 hover:text-Purple rounded-xl p-2 ${href == pathname ? "font-bold text-Purple child:stroke-Purple" : ""} ${className}`}>
            {children}
        </Link>
    )
}


export const InputRadio = ({ className, ...rest }) => {
    const color = (
            <input
                {...rest}
                type="radio"
                className={`disabled: rounded-md border border-solid border-gray appearance-none ring-offset-1 ring-Purple/80 checked:ring ${className}`}
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