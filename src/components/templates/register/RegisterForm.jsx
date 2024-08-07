"use client"
import Link from "next/link"
import { Input } from "@modules/form"
import { useActionState } from 'react';
import { authenticate } from '@/lib/actions';
const RegisterForm = () => {
  const initialState = { message: null, errors: {} }
  const [errorMessages, formAction, isPending] = useActionState(
    authenticate,
    initialState,
  );
  // console.log("isPending =>", isPending)
  console.log("errorMessage =>", errorMessages)
  return (
    <div className="py-4 space-y-2 min-w-64 max-w-80 mx-auto">

      <form action={formAction} >
        <Input
          type="text"
          name="email"
          id="email"
          className="bg-Fuchsia/10 text-ltr "
          label="ایمیل"
          autoFocus={true}
        />
        {/* <div>
          {errorMessages.errors.email ?
            errorMessages.errors.email.map(message => (
              <p
                key={message}
                className="mt-2 text-sm text-pink bg-pink/5">
                {message}
              </p>
            )) : ""
          }
        </div> */}
        <Input
          type="password"
          name="password"
          id="password"
          className="bg-Fuchsia/10 text-ltr"
          label="رمز عبور"
        />
        {/* <div>
          {errorMessages.errors?.password ?
            errorMessages.errors?.password.map(message => (
              <p key={message} className="mt-2 text-sm text-pink bg-pink/5">
                {message}
              </p>
            )) : ""
          }
        </div> */}
        <Input
          type="submit"
          value="ورود"
          className="w-full"
        />
      </form>
      {/* <div>
        {errorMessages?.message ?
          <p className="mt-2 text-sm text-pink bg-pink/5">
            {errorMessages?.message}
          </p> : ""
        }
      </div> */}
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

export default RegisterForm