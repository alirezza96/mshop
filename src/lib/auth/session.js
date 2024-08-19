import { cookies } from "next/headers"
import { decrypt, encrypt } from "./auth"
import { redirect } from "next/navigation"

const cookie = {
    name: "session",
    options: {
        httpOnly: true,
        secure: true,
        path: "/"
    },
    duration: 24 * 60 * 60 * 1000
}


export const createSession = async (userId) => {
    const expires = new Date(Date.now() + cookie.duration)
    const session = await encrypt({ userId, expires })
    cookies().set(cookie.name, session, { ...cookie.options, expires })
    redirect("/dashboard")

}
export const updateSession = async () => {
    const cookie = cookies().get(cookie.name)?.value
    const session = await decrypt(cookie)
    if (!session?.userId) redirect("/register")
    return { userId: session.userId }
}
export const deleteSession = () => {
    cookies().delete(cookie.name)
    redirect("/register")
}
