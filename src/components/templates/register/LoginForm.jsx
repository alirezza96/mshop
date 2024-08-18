"use client"
import ErrorMessage from "@modules/ErrorMessage"
import { authenticate } from '@/lib/actions';
import { useActionState } from "react";
import { Email, Password, Submit } from "@templates/register/Form"
export default function LoginForm() {
  const initialState = { message: null, errors: null, email: null, password: null }
  const [formState, formAction, isPending] = useActionState(
    authenticate,
    initialState,
  );
  return (
    <div className="space-y-2">

      <form
        action={formAction}
      >
        <Email
          autoFocus={true}
          defaultValue={formState.email}
        />
        <>
          {formState.errors &&
            formState.errors.email?.map(message =>
              <ErrorMessage key={message}>
                {message}
              </ErrorMessage>
            )
          }
        </>
        <Password defaultValue={formState.password} />
        <>
          {formState.errors &&
            formState.errors.password?.map(message =>
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
