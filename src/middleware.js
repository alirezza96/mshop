import { NextResponse } from "next/server"
import { decrypt } from "./lib/auth/session"

export default async function middleware(request) {
    console.log("run middleware!")
    //  Decrypt the session from the cookie
    const cookie = request.cookies.get("session")?.value
    const session = await decrypt(cookie)
    // if user not authorized redirect to register
    if (!session?.userId) {
        return NextResponse.redirect(new URL(`/register`, request.url))
    }
  
    // admin panel authorization
    if (request.nextUrl.pathname.startsWith("/admin") && session?.role !== "admin") {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    return NextResponse.next()

}


export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*" ]
}