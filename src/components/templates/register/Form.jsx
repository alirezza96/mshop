import { Input } from "@modules/form"

export const Name = (props) => {
  return (
    <Input
      type="text"
      name="name"
      id="name"
      className="bg-lavender"
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
      className="bg-lavender text-ltr "
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
      className="bg-lavender text-ltr"
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
      className="bg-lavender text-ltr"
      placeholder="رمز عبور خود را وارد نمایید"
      label="تکرار رمز عبور"
      {...props}
    />
  )
}
