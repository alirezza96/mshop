import { Input } from "@modules/form"

export const Name = (props) => {
  return (
    <Input
      type="text"
      name="name"
      id="name"
      className="bg-Fuchsia/10"
      label="نام و نام خانوادگی"
      placeholder="نام و نام خانوادگی خود را وارد نمایید"
      required={true}
      autoComplete="name"
      {...props}
    />

  )
}

export const Email = (props) => {
  return (
    <Input
      type="email"
      name="email"
      id="email"
      autoComplete="email"
      className="bg-Fuchsia/10 text-ltr "
      label="ایمیل"
      placeholder="ایمیل خود را وارد نمایید"
      required={true}
      {...props}
    />
  )
}
export const Password = (props) => {
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
      {...props}
    />
  )
}
export const RePassword = (props) => {
  return (
    <Input
      type="password"
      name="rePassword"
      id="rePassword"
      required={true}
      minLength={4}
      maxLength={8}
      className="bg-Fuchsia/10 text-ltr"
      placeholder="رمز عبور خود را وارد نمایید"
      label="تکرار رمز عبور"
      {...props}
    />
  )
}
export const Submit = ({ isPending, ...props }) => {
  return (
    <Input
      type="submit"
      value={isPending ? "چند لحظه صبر کنید..." : "ورود"}
      className="w-full"
      disabled={isPending}
      {...props}
    />
  )
}
