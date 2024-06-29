const Input = ({ children, classname, ...rest }) => {
    return (
        <>
            <label>{children}</label>
            <input {...rest} className={classname} />
        </>
    )
}

export default Input