import { NextResponse } from "next/server"
import { decrypt } from "./lib/auth/session"

export default async function middleware(request) {
    console.log("run middleware!")
    //  Decrypt the session from the cookie
    const cookie = request.cookies.get("session")?.value
    const session = await decrypt(cookie)
    if (!session?.userId) {
        return NextResponse.redirect(new URL(`/register?redirect=${request.url}`, request.url))
    }
    // dashboard panel authorization
    return NextResponse.next()

}


export const config = {
    matcher: ["/dashboard/:path*"]
}