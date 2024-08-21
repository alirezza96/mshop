export default function ErrorMessage({ children }) {
    const element = children ?
        <p className="my-2 py-1 px-2 font-bold  text-sm text-pink bg-pink/5 rounded-sm">
            {children}
        </p>
        : null
    return element
}