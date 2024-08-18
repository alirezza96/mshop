export default function ErrorMessage({ children }) {
    return (
        <p className="my-2 text-sm text-pink bg-pink/5 rounded-full">
            {children}
        </p>
    )
}