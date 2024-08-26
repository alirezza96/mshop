"use client"
import ErrorMessage from "@modules/ErrorMessage"
import { useActionState } from "react";
import { Name, Email, Password, RePassword } from "@templates/register/Form"
import { Submit } from "@/components/modules/form";
import { signUp } from "@/lib/auth/action";
export default function LoginForm() {
  const initialState = { message: null, errors: null, name: null, email: null, password: null, rePassword: null }
  const [formState, formAction, isPending] = useActionState(
    signUp,
    initialState,
  );
  console.log("formState =>", formState)
  return (
    <div className="space-y-4">

      <form
        action={formAction}
      >
        <Name
          autoFocus={true}
          defaultValue={formState.name}
        />
        <ErrorMessage>{formState.errors?.name}</ErrorMessage>
        <Email defaultValue={formState.email} />
        <ErrorMessage>{formState.errors?.email}</ErrorMessage>
        <Password defaultValue={formState.password} />
        <>
          {
            formState.errors?.password?.map(message =>
              <ErrorMessage key={message}>
                {message}
              </ErrorMessage>
            )
          }
        </>
        <RePassword defaultValue={formState.rePassword} />
        <>
          {
            formState.errors?.password?.map(message =>
              <ErrorMessage key={message}>
                {message}
              </ErrorMessage>
            )
          }
        </>
        <Submit title="ادامه" disabled={isPending} className="w-full" />
      </form>
      <ErrorMessage>{formState.message}</ErrorMessage>

    </div>

  )
}
