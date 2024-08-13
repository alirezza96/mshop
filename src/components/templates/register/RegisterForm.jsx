"use client"
import Link from "next/link"
import { Input } from "@modules/form"
import { authenticate } from '@/lib/actions';
import { useActionState } from "react";
export default function RegisterForm() {
  const initialState = { message: null, errors: {} }
  const [formState, formAction, isPending] = useActionState(
    authenticate,
    initialState,
  );
  console.log("is pending =>", isPending)
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
          autoFocus={true}
        />
        <div>
          {formState.errors.email ?
            formState.errors.email.map(message => (
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
          required
          className="bg-Fuchsia/10 text-ltr"
          label="رمز عبور"
        />
        <div>
          {formState.errors?.password ?
            formState.errors?.password.map(message => (
              <p key={message} className="mt-2 text-sm text-pink bg-pink/5">
                {message}
              </p>
            )) : ""
          }
        </div>
        <Input
          type="submit"
          value="ورود"
          className="w-full"
          required
          disabled={isPending}
        />
      </form>
      <div>
        {formState?.message ?
          <p className="mt-2 text-sm text-pink bg-pink/5">
            {formState?.message}
          </p> : ""
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
