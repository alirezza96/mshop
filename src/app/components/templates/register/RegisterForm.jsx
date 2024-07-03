"use client"
import Link from "next/link"
import { Input } from "@/app/components/modules/form"
const RegisterForm = () => {
  return (
    <form className="py-4 space-y-2 min-w-64 max-w-80 mx-auto">
      <Input
        type="email"
        className="bg-Fuchsia/10 text-ltr "
        label="ایمیل"
        autoFocus
        required
        autoSave

      />
      <Input
        type="password"
        className="bg-Fuchsia/10 text-ltr"
        label="پسورد"
        required
        minLength="4"
        maxLength="8"
      />
      <Link href={"#"} className="text-Fuchsia font-bold block text-xs">
        فراموشی رمز عبور
      </Link>
      <Input type="submit" value="ورود" />
      <div className="text-sm text-center ">
        <span>
          حساب کاربری ندارید؟
          <Link href={"#"} className="text-Fuchsia font-bold">
            ساخت حساب کاربری
          </Link>
        </span>
      </div>

    </form>
  )
}

export default RegisterForm