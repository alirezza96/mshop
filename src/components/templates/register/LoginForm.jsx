"use client"
import ErrorMessage from "@modules/ErrorMessage"
import { useActionState } from "react";
import { Email, Password, Submit } from "@templates/register/Form"
import { signIn } from "@/lib/auth/action"
export default function LoginForm() {
  const initialState = { message: null, errors: null, email: null, password: null }
  const [formState, formAction, isPending] = useActionState(
    signIn,
    initialState,
  );
  return (
    <div className="space-y-2">
      <form action={formAction}>
        <Email autoFocus={true} defaultValue={formState.email} />
        <ErrorMessage>{formState.errors?.email}</ErrorMessage>
        <Password defaultValue={formState.password} />
        <ErrorMessage>{formState.errors?.password}</ErrorMessage>
        <Submit isPending={isPending} />
      </form>
      <ErrorMessage>{formState.message}</ErrorMessage>
    </div>

  )
}
