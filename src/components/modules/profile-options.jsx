"use client"
import { logout } from "@/lib/actions"
import { UserIcon } from "@heroicons/react/24/outline"
import { Button, NavLink } from "@modules/form"
import { useRouter } from "next/navigation"

export default function ProfileOptions({ name }) {
    const { push } = useRouter()
    const navigateHandler = () => {
        if (name) return
        push("/register")
    }
    return (
        <div className="group">
            <Button
                onClick={navigateHandler}
                className="inline-flex bg-transparent"
            >
                <Icon name={name} />
            </Button>
            {
                name && <Options />
            }

        </div>
    )
}

const Options = () => {
    return (
        <ul className="font-morabba w-full md:w-48 absolute left-0 bottom-14 md:top-14 md:bottom-auto box py-4 px-2 space-y-2  z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-200">
            <li>
                <NavLink href="/dashboard">حساب کاربری</NavLink>
            </li>
            <li>
                <form action={logout}>
                    <button
                        type="submit"
                        className="text-Fuchsia hover:bg-Purple/10 hover:text-Purple rounded-xl p-2 "
                    >
                        خروج از حساب کاربری
                    </button>
                </form>
            </li>
        </ul>

    )
}

const Icon = ({ name }) => {
    const elem = !name
        ?
        <UserIcon className="w-6" />
        :
        <span className="w-6 leading-6 bg-Fuchsia/10 rounded-full">
            {name[0].toUpperCase()}
        </span>
    return elem
}