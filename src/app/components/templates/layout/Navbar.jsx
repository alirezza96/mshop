import Button from "@/app/components/modules/button"
import { ShoppingCartIcon, MagnifyingGlassIcon, Bars3Icon, HomeIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
const Navbar = () => {
    const isLoggedIn = true
    return (
        <div className="container min-h-12 fixed inset-x-0 flex flex-row-reverse justify-around items-center bg-white font-morabba rounded-lg my-3 md:justify-between md:px-2 ">

            <Button>
                <ShoppingCartIcon className="w-6 h-6 stroke-Fuchsia" />
            </Button>
            <Button className="md:order-1">
                <HomeIcon className="w-6 h-6 stroke-Fuchsia" />
            </Button>
            <nav className="hidden md:flex gap-x-8">
                <Link href={"#"}>محصولات</Link>
                <Link href={"#"}>تماس با ما</Link>
                <Link href={"#"}>درباره ما</Link>
            </nav>
            <Button className="md:hidden">
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