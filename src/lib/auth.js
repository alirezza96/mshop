import { hash, compare } from "bcrypt"
import { sign, verify } from "jsonwebtoken"
import { sql } from "@vercel/postgres"
import { cookies } from "next/headers"
export const hashPassword = async (password) => {
    return await hash(password, 10)
}

export const comparePassword = async (password, hashedPassword) => {
    return await compare(password, hashedPassword)
}

export const generateToken = (data) => {
    return sign({ ...data }, process.env.PRIVATE_KEY, { expiresIn: "60d" })
}

export const verifyToken = (token) => {
    return verify(token, process.env.PRIVATE_KEY)
}

// token payload
export const tokenPayload = async () => {
    try {
        const token = cookies().get("token")
        if (!token) return false
        // verified token
        const tokenPayload = verifyToken(token.value)
        if (!tokenPayload) return false
        const data = await sql`
        SELECT id ,name, email FROM users
        WHERE id = ${tokenPayload.id}
        `
        const user = data.rows[0]
        // if user not exists
        if (!user) return false
        return user
    } catch (error) {
        console.error("Database Error (tokenPayload) =>", error)
        return {
            message: "Database error"
        }
    }


}