"use client"
import { deleteSession } from "@/lib/auth/session"
import { UserIcon } from "@heroicons/react/24/outline"
import { Button, NavLink } from "@modules/form"
import { useRouter } from "next/navigation"
export default function ProfileOptions({payload}) {
    const { push } = useRouter()
    const navigateHandler = () => {
        if (payload) return
        push("/register")
    }
    return (
        <div className="group">
            <Button
                onClick={navigateHandler}
                className="inline-flex bg-transparent"
            >
                <Icon name={payload?.name} />
            </Button>
            {
                payload && <Options />
            }
        </div>
    )
}
const Options = () => {
    return (
        <ul className="font-secondary w-full md:w-48 absolute left-0 bottom-14 md:top-14 md:bottom-auto box py-4 px-2 space-y-2  z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-200">
            <li >
                <NavLink className="block" href="/dashboard">حساب کاربری</NavLink>
            </li>
            <li>
                <form action={deleteSession}>
                    <Button
                        className="w-full bg-transparent text-right"
                        type="submit"
                    >
                        خروج از حساب کاربری
                    </Button>
                </form>
            </li>
        </ul>

    )
}
const Icon = ({ name }) => {
    const elem = name
        ?
        <span className="w-6 leading-6 bg-lavender rounded-full">
            {
                name[0]
            }
        </span>
        :
        <UserIcon className="w-6" />
    return elem
}