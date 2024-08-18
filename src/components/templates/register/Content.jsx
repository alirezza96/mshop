"use client"
import { Button } from "@/components/modules/form"
import LoginForm from "@templates/register/LoginForm"
import RegisterForm from "@templates/register/RegisterForm"
import { useState } from "react"

export default function Content() {
    const [isRegister, setIsRegister] = useState(true)
    return (
        <div className="py-6 px-4 grow min-w-80">
            {
                isRegister ? <LoginForm /> : <RegisterForm />
            }
            <div className="text-sm text-center ">
                <span>
                    {isRegister ? "حساب کاربری ندارید؟" : "حساب کاربری دارید؟"}
                    <Button
                        onClick={() => setIsRegister(prev => !prev)}
                        className="bg-transparent hover:bg-transparent">
                        {isRegister ? "ساخت حساب کاربری" : "وارد شوید"}
                    </Button>
                </span>
            </div>
        </div>
    )
}