import { tokenPayload } from "@/lib/auth"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function layout({ children }) {
    const cookieStore = cookies()
    const token = cookieStore.get("token")
    const payload = await tokenPayload(token)
    if (!payload) redirect("/register")
    return (
        <>
            {children}
        </>
    )
}