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
            .setExpirationTime('1hr')
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




const duration = 24 * 60 * 60 * 1000
const cookie = {
    name: "session",
    options: {
        httpOnly: true,
        secure: true,
        path: "/"
    },
    duration,
    updateDuration: 7 * duration
}

const callback = (redirect) => {
    const pathname = headers().get("referer")
    const searchParams = new URLSearchParams(new URL(pathname).search)
    searchParams.has("redirect") ? redirect(searchParams.get("redirect"))
        : redirect(redirect)
}

export const createSession = async (userId) => {
    const expires = new Date(Date.now() + cookie.duration)
    const session = await encrypt({ userId, expires })
    cookies().set(cookie.name, session, { ...cookie.options, expires })
    callback("/dashboard")
}


export const verifySession = async () => {
    const cookieStore = cookies().get(cookie.name)?.value
    const session = await decrypt(cookieStore)
    if (!session?.userId) callback("/register")
    return {
        isAuth: true,
        userId: session.userId
    }
}


export const updateSession = async () => {
    const session = cookies().get(cookie.name)?.value
    const payload = await decrypt(session)
    if (!session || !payload) return null
    const expires = new Date(Date.now + cookie.updateDuration)
    cookies.set(cookie.name, session, { ...cookie.options, expires })

}

export const deleteSession = () => {
    cookies().delete(cookie.name)
    redirect("/register")
}

