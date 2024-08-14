"use client"
import Link from "next/link"
import { Input } from "@modules/form"
import { authenticate } from '@/lib/actions';
import { useActionState } from "react";
export default function RegisterForm() {
  const initialState = { message: null, errors: null, email: null, password: null , isValid: false}
  const [formState, formAction, isPending] = useActionState(
    authenticate,
    initialState,
  );
  return (
    <div className=" space-y-2 bg-white py-6 px-4  grow">

      <form
        action={formAction}
      >
        <Input
          type="text"
          name="email"
          id="email"
          className="bg-Fuchsia/10 text-ltr "
          label="ایمیل"
          placeholder="ایمیل خود را وارد نمایید"
          defaultValue={formState.email}
          required={true}
          autoFocus={true}
        />
        <div>
          { formState.errors ?
            formState.errors.email?.map(message => (
              <p
                key={message}
                className="mt-2 text-sm text-pink bg-pink/5">
                {message}
              </p>
            )) : ""
          }
        </div>
        <Input
          type="password"
          name="password"
          id="password"
          required={true}
          minLength={4}
          maxLength={8}
          className="bg-Fuchsia/10 text-ltr"
          placeholder="رمز عبور خود را وارد نمایید"
          defaultValue={formState.password}
          label="رمز عبور"
        />
        <div>
          {
            formState.errors ?
            formState.errors.password?.map(message => (
              <p key={message} className="mt-2 text-sm text-pink bg-pink/5">
                {message}
              </p>
            )) : ""
          }
        </div>
        <Input
          type="submit"
          value={isPending ? "چند لحظه صبر کنید..." : "ورود"}
          className="w-full"
          required
          disabled={isPending}
        />
      </form>
      <div>
        {
          <p className={`mt-2 text-sm ${!formState.isValid ? "text-pink bg-pink/5" : "text-green bg-green/15"}`}>
            {formState.message}
          </p> 
        }
      </div>
      <div className="text-sm text-center ">
        <span>
          حساب کاربری ندارید؟
          <Link href={"#"} className="text-Fuchsia font-bold">
            ساخت حساب کاربری
          </Link>
        </span>
      </div>
    </div>

  )
}
