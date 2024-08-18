"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

const buttonStyle = "font-morabba text-Fuchsia  hover:text-Purple hover:bg-Purple/10  rounded-xl p-2"
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
    return rest.type === "submit" ?
        (
            <input {...rest}
                className={`${className} bg-Purple hover:bg-dark-purple text-white p-2 my-1 rounded-md min-w-24 cursor-pointer font-morabba disabled:cursor-not-allowed disabled:bg-gray`}
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
                        className={`h-10 flex  items-center justify-between   bg-lavender my-1  rounded-lg ${className}`} >
                        <input
                            {...rest}
                            id={rest.id}
                            className=" w-full mx-2  bg-transparent outline-none focus-visible:border-b-2 border-Fuchsia/30 font-dana placeholder:text-right placeholder:text-sm" />
                        {children}
                    </div>
                </>

            )
}



export const Select = ({ label, className, children, defaultValueId, defaultValueName, ...rest }) => {
    return (
        <>
            <label htmlFor={rest.id} className="font-morabba">
                {label}
            </label>
            <select
                className={`h-10 w-full px-2  flex  items-center justify-between   bg-lavender my-1  rounded-lg ${className}`}
                {...rest}
            >
                <option value={defaultValueId}>{defaultValueName}</option>
                {children}
            </select>
        </>
    )
}



export const InputRadio = ({ children, className, ...rest }) => {

    return (

        <button {...rest}
            type="radio"
            style={{ backgroundColor: rest.color }}
            className={`${className} relative   rounded-full border border-gray checked:ring-2 disabled:text-gray disabled:cursor-not-allowed  disabled:before:absolute before:inset-x-0 before:h-px before:bg-gray before:-z-10 z-10 before:-rotate-45 flex justify-center items-center overflow-hidden`}
        >
            {children}
        </button>

    )
}


export const Submit = ({ isPending, ...props }) => {
    return (
      <Input
        type="submit"
        value={isPending ? "چند لحظه صبر کنید..." : "ادامه"}
        className="w-full"
        disabled={isPending}
        {...props}
      />
    )
  }