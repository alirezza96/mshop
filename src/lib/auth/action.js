"use server"
import { sql } from "@vercel/postgres"
import { SignInFormSchema, SignUpFormSchema } from "@/lib/auth/definitions"
import { createSession, verifySession } from "@/lib/auth/session"
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
    // 1. Validate form fields
    const validationResult = SignUpFormSchema.safeParse(data)
    // If any form fields are invalid, return early
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
    // 2. Prepare data for insertion into database
    const { name, email, password, rePassword } = validationResult.data
    if (password !== rePassword) {
        return {
            message: "رمز عبور یکسان نیست",
            name,
            email,
            password,
            rePassword
        }
    }
    // 3. Check if the user's email already exists
    const existingUser = await sql`
        SELECT 1 FROM users WHERE email = ${email}
        `
    // is user exists?
    if (existingUser.rowCount) {
        return {
            message: "با این ایمیل قبلا در سایت ثبت نام شده است.",
            name,
            email,
            password,
            rePassword
        }
    }
    // Hash the user's password
    const hashedPassword = await hashPassword(password)
    // checking for role
    const { rowCount: isUser } = await sql`
        SELECT 1 FROM users LIMIT 1
      `
    // 3. Insert the user into the database  
    const result = await sql`
        INSERT INTO users (name ,email, password, role)
        VALUES (${name}, ${email}, ${hashedPassword}, ${isUser ? "user" : "admin"})
        RETURNING id,role
      `
    const user = result.rows[0]
    if (!user) {
        return {
            message: "خطایی رخ داده است"
        }
    }
    // 4. Create a session for the user
    await createSession({ userId: user.id, name, role: user.role })
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
    // 1. Validate form fields
    const validationResult = SignInFormSchema
        .safeParse(data)
    // If any form fields are invalid, return early
    if (!validationResult.success) {
        return {
            message: "لطفا مواردی که مشخص شده را تکمیل کنید",
            errors: validationResult.error.flatten().fieldErrors,
            email: data.email,
            password: data.password
        }
    }

    const { email, password } = validationResult.data
    // 2. Query the database for the user with the given email
    const users = await sql`
        SELECT id, name, email, password, is_ban, role FROM users WHERE email = ${email}
        `
    const user = users.rows[0]
    // If user is not found, return early
    if (!user) {
        return {
            message: "نام کاربری یا رمز عبور اشتباه است",
            email
        }
    }
    // if user is ban, return early
    if (user.is_ban) {
        return {
            message: "حساب کاربری شما مسدود است."
            , email
            , password
        }
    }
    // 3. Compare the user's password with the hashed password in the database
    const comparedPassword = await comparePassword(password, user.password)

    if (!comparedPassword) {
        return {
            message: "نام کاربری یا رمز عبور اشتباه است",
            email
        }
    }
    // 4. If login successful, create a session for the user and redirect
    await createSession({ userId: user.id, name: user.name, role: user.role })

}

// isBan

export const banUser = async () => {
    const session = await verifySession()
    // console.log("session =>", session)
}