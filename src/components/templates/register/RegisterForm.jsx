"use client"
import ErrorMessage from "@modules/ErrorMessage"
import { register } from '@/lib/actions';
import { useActionState } from "react";
import { Name, Email, Password, RePassword, Submit } from "@templates/register/Form"
export default function LoginForm() {
  const initialState = { message: null, errors: null, name: null, email: null, password: null, rePassword: null }
  const [formState, formAction, isPending] = useActionState(
    register,
    initialState,
  );
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
          {formState.errors &&
            formState.errors.name?.map(message =>
              <ErrorMessage key={message}>
                {message}
              </ErrorMessage>
            )
          }
        </>
        <Email defaultValue={formState.email} />
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
        <RePassword defaultValue={formState.rePassword} />
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
