"use client"
import ErrorMessage from "@modules/ErrorMessage"
import { useActionState } from "react";
import { Email, Password } from "@templates/register/Form"
import { Submit } from "@/components/modules/form";
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
        <Submit disabled={isPending} title="ادامه" className="w-full" />
      </form>
      <ErrorMessage>{formState.message}</ErrorMessage>
    </div>

  )
}
