"use server"
import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"
import { SignJWT, jwtVerify } from 'jose';
const secretKey = process.env.PRIVATE_KEY;
const key = new TextEncoder().encode(secretKey);

// encrypt token
export const encrypt = async (payload) => {
    try {
        return new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(key);
    } catch (error) {
        console.error("failed to encrypt =>", error)
    }
}

// decrypt token
export const decrypt = async (session) => {
    try {
        const { payload } = await jwtVerify(session, key, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch (error) {
        return null;
    }
}




const cookie = {
    name: "session",
    options: {
        httpOnly: true,
        secure: true,
        path: "/"
    },
    duration: 60 * 60 * 1000
}

// const callback = (redirect) => {
//     const pathname = headers().get("referer")
//     const searchParams = new URLSearchParams(new URL(pathname).search)
//     searchParams.has("redirect") ? redirect(searchParams.get("redirect"))
//         : redirect(redirect)
// }
const setCookie = (session) => {
    const expires = new Date(Date.now() + cookie.duration)
    cookies().set(cookie.name, session, { ...cookie.options, expires })

}


export const createSession = async (data) => {
    const session = await encrypt({ ...data })
    setCookie(session)
    redirect("/dashboard")
}


export const verifySession = async () => {
    // const cookieStore = cookies().get(cookie.name)?.value
    // const session = await decrypt(cookieStore)
    const payload = await getPayload()
    if (!payload?.userId) redirect("/register")
    return {
        isAuth: true,
        role: session.role,
        userId: session.userId
    }
}


export const updateSession = async () => {
    // const session = cookies().get(cookie.name)?.value
    // const payload = await decrypt(session)
    // if (!session || !payload) return null
    const payload = await getPayload()
    if (!payload) return null
    setCookie(payload)
}

export const deleteSession = () => {
    cookies().delete(cookie.name)
    redirect("/register")
}

export const getPayload = async () => {
    const session = cookies().get(cookie.name)?.value
    const payload = await decrypt(session)
    return payload
}