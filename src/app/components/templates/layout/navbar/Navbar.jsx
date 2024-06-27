import Button from "@/app/components/modules/button"
import { ShoppingCartIcon, MagnifyingGlassIcon, Bars3Icon, HomeIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
const Navbar = () => {
    const isLoggedIn = true
    return (
        <div className="min-h-12 container bg-white flex flex-row-reverse justify-around items-center font-morabba  ">
            <Button>
                <ShoppingCartIcon className="w-6 h-6 stroke-Fuchsia" />
            </Button>
            <Button>
                <HomeIcon className="w-6 h-6 stroke-Fuchsia" />
            </Button>
            <Button>
                <Bars3Icon className="w-6 h-6 stroke-Fuchsia" />
            </Button>

        </div>
    )
}








const LoggedIn = (isLoggedIn) => {
    const loggedIn =
        <div>
            <div className="bg-red-300 h-16 w-16">
                A
            </div>
        </div>
}



export default Navbar