import { tokenPayload } from "@/app/lib/auth"
import { redirect } from "next/navigation"

export default async function layout({ children }) {
    const payload = await tokenPayload()
    if (!payload?.role.includes("admin","user")) redirect("/register")
    return (
        <>
            {children}
        </>
    )
}