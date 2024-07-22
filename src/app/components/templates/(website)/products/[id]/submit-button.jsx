"use client"
import { useFormStatus } from "react-dom"
export default function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className={`${pending && "animate-pulse cursor-not-allowed" } bg-Purple hover:bg-dark-purple text-white p-2 my-1 rounded-md min-w-24 cursor-pointer font-morabba`}>
            افزودن به سبد خرید
        </button>
    )
}