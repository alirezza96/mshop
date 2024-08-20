"use server"
import { sql } from "@vercel/postgres"
import { headers } from "next/headers"
import { sessionFormSchema } from "@/lib/definitions"
import { createSession, updateSession, deleteSession } from "@/lib/auth/session"
import { comparePassword, hashPassword } from "@/lib/auth/auth"
// signUp
export async function signUp(
    prevState,
    formData
) {
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        rePassword: formData.get("rePassword"),
    }
    const validationResult = sessionFormSchema.safeParse(data)
    if (!validationResult.success) {
        return {
            message: "لطفا مواردی که مشخص شده را تکمیل کنید",
            errors: validationResult.error.flatten().fieldErrors,
            name: data.name,
            email: data.email,
            password: data.password,
            rePassword: data.rePassword

        }
    }
    const { name, email, password, rePassword } = validationResult.data
    if (password !== rePassword) {
        return {
            message: "رمز عبور یکسان نیست"
        }
    }
    const users = await sql`
        SELECT 1 FROM users WHERE email = ${email}
        `
    const user = users.rowCount
    // is user exists?
    if (user) {
        return {
            message: "این ایمیل قبلا در سایت ثبت نام کرده است",
            name,
            email,
            password,
            rePassword
        }
    }
    // hash password
    const hashedPassword = await hashPassword(password)
    // is user
    const { rowCount: isUser } = await sql`
        SELECT 1 FROM users LIMIT 1
      `
    const newUser = await sql`
        INSERT INTO users (name ,email, password, role)
        VALUES (${name}, ${email}, ${hashedPassword}, ${isUser ? "user" : "admin"})
        RETURNING id
      `
    const newUserId = newUser.rows[0].id
    await createSession(newUserId)
}


// signIn
export async function signIn(
    prevState,
    formData,
) {

    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    }
    const validationResult = sessionFormSchema
        .omit({ name: true, rePassword: true })
        .safeParse(data)
    if (!validationResult.success) {
        return {
            message: "لطفا مواردی که مشخص شده را تکمیل کنید",
            errors: validationResult.error.flatten().fieldErrors,
            email: data.email,
            password: data.password
        }
    }

    const { email, password } = validationResult.data

    const users = await sql`
        SELECT id, email, password FROM users WHERE email = ${email}
        `
    const user = users.rows[0]
    // is user exists?
    if (!user) {
        return {
            message: "نام کاربری یا رمز عبور اشتباه است",
            email
        }
    }
    // check password
    const comparedPassword = await comparePassword(password, user.password)

    if (!comparedPassword) {
        return {
            message: "نام کاربری یا رمز عبور اشتباه است",
            email
        }
    }
    await createSession(user.id)

}
// signOut
export const signOut = () => {
    deleteSession()
}

