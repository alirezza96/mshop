import clsx from "clsx"
export const Button = ({ children, className, ...rest }) => <button {...rest} className={clsx("hover:bg-Fuchsia/10 rounded-full p-2", className)}>
    {children}
</button>

export const Input = ({ children, classname, ...rest }) => {
    return (
        <>
            <label>{children}</label>
            <input {...rest} className={clsx(classname, { "text-Fuchsia hover:bg-Fuchsia/10 rounded-full p-2 cursor-pointer focus-visible:outline-dashed": rest.type == "submit" })} />
        </>
    )
}