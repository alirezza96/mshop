import clsx from "clsx"
const Button = ({ children, className, ...rest }) => <button {...rest} className={clsx("hover:bg-Fuchsia/10 rounded-full p-2", className)}>
    {children}
</button>

export default Button