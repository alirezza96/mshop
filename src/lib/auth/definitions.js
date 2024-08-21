import { z } from "zod"

export const SignUpFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, "حداقل طول نام و نام خانوادگی 3 حرف میباشد")
    ,
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email("ایمیل وارد شده نامعتبر است."),
    password: z.string()
        .min(4, "بیشتر از 4 حرف باشد")
        .max(20, "کمتر از 20 حرف باشد")
        .regex(/[a-zA-Z]/, "شامل حروف کوچک یا بزرگ انگلیسی")
        .regex(/[0-9]/, "شامل عدد")
        .regex(/[^a-zA-Z0-9]/, "شامل نماد")
        .trim()
    , rePassword: z.string()
})

export const SignInFormSchema = z.object({
    email: z.string().trim().email("ایمیل وارد شده نامعتبر است."),
    password: z.string().trim().min(1, "رمز عبور خود را وارد کنید")
})