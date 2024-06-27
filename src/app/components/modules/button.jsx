import clsx from "clsx"
const Button = ({ children, className, ...rest }) => <button {...rest} className={clsx("hover:bg-Fuchsia/10 p-2 rounded-full", className)}>
    {children}
</button>

export default Button