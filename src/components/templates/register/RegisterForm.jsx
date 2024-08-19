"use client"
import ErrorMessage from "@modules/ErrorMessage"
import { useActionState } from "react";
import { Name, Email, Password, RePassword, Submit } from "@templates/register/Form"
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
        <>
          {
            formState.errors?.name?.map(message =>
              <ErrorMessage key={message}>
                {message}
              </ErrorMessage>
            )
          }
        </>
        <Email defaultValue={formState.email} />
        <>
          {
            formState.errors?.email?.map(message =>
              <ErrorMessage key={message}>
                {message}
              </ErrorMessage>
            )
          }
        </>
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
        <Submit isPending={isPending} />
      </form>
      <ErrorMessage>{formState.message}</ErrorMessage>

    </div>

  )
}
