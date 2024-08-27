"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

const buttonStyle = "font-secondary text-Fuchsia  hover:text-Purple hover:bg-Purple/10  rounded-xl p-2"
export const Button = ({ children, className, ...rest }) => {
    // return <button {...rest} className={`button transition-colors ${className}`}>{children}</button>
    const elem = rest.href ?
        <Link className={`${buttonStyle} ${className}  bg-Purple/10`} {...rest}>{children}</Link>
        :
        <button className={`${buttonStyle} ${className}  bg-Purple/10`} {...rest}>{children}</button>
    return elem
}

export const NavLink = ({ children, href, className, ...rest }) => {
    const pathname = usePathname()
    return (
        <Link href={href}  {...rest} className={`${buttonStyle} ${href == pathname ? "font-bold text-Purple child:stroke-Purple" : ""} ${className}`} >
            {children}
        </Link>
    )
}

export const Input = ({ children, className, label, ...rest }) => {
    switch (rest.type) {
        case "submit": {
            return (
                <input {...rest}
                    className={`${className} bg-Purple hover:bg-dark-purple text-white p-2 my-1 rounded-md min-w-24 cursor-pointer font-secondary disabled:cursor-not-allowed disabled:bg-gray`}
                />
            )
        }
        case "textArea": {
            return (
                <div >
                    <label className="block">{label}</label>
                    <input {...rest} />
                </div>
            )
        }
        case "radio": {
            return (
                <>
                    <input {...rest}
                        type="radio"
                        id={rest.id}
                        className="peer appearance-none"
                    />
                    <label
                        htmlFor={rest.id}
                        style={{ backgroundColor: rest.color }}
                        className={`${className} relative 
                        before:bg-gray peer-disabled:text-gray peer-disabled:before:absolute before:inset-x-0 before:inset-y-1/2 before:-z-10 before:h-px before:-rotate-45  before:transition-transform
                         text-sm overflow-hidden  border border-solid border-gray cursor-pointer text-center rounded-3xl 
                        hover:bg-lavender transition-all delay-75
                        select-none
                         peer-checked:outline-dotted  outline-offset-2 outline-Purple `}
                    >
                        {children}
                    </label>
                </>
            )
        }
        default: {
            return (
                <>
                    <label htmlFor={rest.id} className="font-secondary">
                        {label}
                    </label>
                    <div
                        className={`h-10 flex  items-center justify-between   bg-lavender my-1  rounded-lg ${className}`} >
                        <input
                            {...rest}
                            id={rest.id}
                            className=" w-full mx-2  bg-transparent outline-none focus-visible:border-b-2 border-Fuchsia/30  placeholder:text-right placeholder:text-sm" />
                        {children}
                    </div>
                </>

            )
        }
    }
}



export const Select = ({ label, className, children, defaultValueId, defaultValueName, ...rest }) => {
    return (
        <>
            <label htmlFor={rest.id} className="font-secondary">
                {label}
            </label>
            <select
                className={`h-10 w-full px-2  flex  items-center justify-between   bg-lavender my-1  rounded-lg ${className}`}
                {...rest}
            >
                <option value={defaultValueId} >{defaultValueName}</option>
                {children}
            </select>
        </>
    )
}





export const Submit = ({ title, className, ...props }) => {
    return (
        <Input
            type="submit"
            value={props.disabled ? "چند لحظه صبر کنید..." : `${title}`}
            className={className}
            {...props}
        />
    )
}