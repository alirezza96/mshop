import { Input } from "@modules/form"

export const Email = ({ rest }) => {
  return (
    <Input
      type="text"
      name="email"
      id="email"
      className="bg-Fuchsia/10 text-ltr "
      label="ایمیل"
      placeholder="ایمیل خود را وارد نمایید"
      required={true}
      autoFocus={true}
      {...rest}
    />
  )
}
export const Password = ({ rest }) => {
  return (
    <Input
      type="password"
      name="password"
      id="password"
      required={true}
      minLength={4}
      maxLength={8}
      className="bg-Fuchsia/10 text-ltr"
      placeholder="رمز عبور خود را وارد نمایید"
      label="رمز عبور"
      {...rest}
    />
  )
}
export const RePassword = ({ rest }) => {
  return (
    <Input
      type="password"
      name="password"
      id="password"
      required={true}
      minLength={4}
      maxLength={8}
      className="bg-Fuchsia/10 text-ltr"
      placeholder="رمز عبور خود را وارد نمایید"
      label="تکرار رمز عبور"
      {...rest}
    />
  )
}
export const Submit = ({ isPending, ...rest }) => {
  return (
    <Input
      type="submit"
      value={isPending ? "چند لحظه صبر کنید..." : "ورود"}
      className="w-full"
      disabled={isPending}
      {...rest}
    />
  )
}

