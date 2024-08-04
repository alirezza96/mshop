export default function ErrorMessage({ error }) {
    return (
        <p className="my-2 text-sm text-pink bg-pink/5 rounded-full">
            {error}
        </p>
    )
}