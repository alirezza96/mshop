import { tokenPayload } from "@/lib/auth/auth"
import { redirect } from "next/navigation"

export default async function layout({ children }) {
    const payload = await tokenPayload()
    if (!payload) redirect("/register")
    return (
        <>
            {children}
        </>
    )
}