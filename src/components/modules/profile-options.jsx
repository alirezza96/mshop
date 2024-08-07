import { logout } from "@/lib/actions"
import { UserIcon } from "@heroicons/react/24/outline"
import { tokenPayload } from "@/lib/auth"
import { NavLink } from "@modules/form"

export default async function ProfileOptions() {
    const {name} = await tokenPayload()
    return (
        <div className="group">
            <NavLink
                href={name ? "/dashboard" : "/register"}
                className="inline-flex"
            >
                <Icon name={name} />
            </NavLink>
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
        <UserIcon className="w-6 h-6 " />
        :
        <div className="w-6 leading-6 rounded-full text-center bg-Fuchsia/10">
            {name[0].toUpperCase()}
        </div>
    return elem
}