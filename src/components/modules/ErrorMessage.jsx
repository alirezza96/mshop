export default function ErrorMessage({ status, children }) {
    const element = children ?
        <p className={`my-1 py-1 px-2 font-bold  text-sm   rounded-full  transition-opacity delay-700
        ${status ? "text-green bg-green/10" : "text-pink bg-pink/5"}`}>
            {children}
        </p>
        : null
    return element
}