import { Button, NavLink } from "@/app/components/modules/form"
import { ShoppingCartIcon, Bars3Icon, HomeIcon, UserIcon } from "@heroicons/react/24/outline"
import Searchbar from "./Searchbar"
import Basket from "./Basket"
const Navbar = () => {
    const isLoggedIn = false
    return (
        <div style={{ padding: "0 5px" }} className="h-12 flex items-center gap-x-1 lg:gap-x-2 fixed inset-x-0 bottom-0 md:top-2  md:container  box   z-50">
            <div className="flex  items-center justify-between grow ">
                <div className="h-12 flex flex-row-reverse md:flex-row items-center gap-x-2">
                    <NavLink href="/" >
                        <HomeIcon className="w-6 h-6 stroke-Fuchsia" />
                    </NavLink>
                    <div className="hidden md:block w-px bg-gray h-8"></div>
                    <div className="hidden md:flex md:gap-x-2 lg:gap-x-4 font-morabba">
                        <NavLink href={"/products"} className="group">
                            محصولات
                            <div className=" absolute bottom-12 md:bottom-auto md:top-14 inset-x-0 box p-2  min-h-48 max-h-96 overflow-y-auto z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-200">
                                <nav>
                                    <ul>
                                        <li>
                                            زنانه
                                        </li>
                                        <li>
                                            مردانه
                                        </li>
                                        <li>
                                            بچگانه
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        </NavLink>
                        <NavLink href={"/contact-us"}>تماس با ما</NavLink>
                        <NavLink href={"/about-us"}>درباره ما</NavLink>
                    </div>
                    <Button className="md:hidden ">
                        <Bars3Icon className="w-6 h-6 stroke-Fuchsia" />
                    </Button>
                </div>

            </div>
            <Searchbar className="fixed top-0 inset-x-0 shadow-md md:shadow-none  md:relative md:rounded-xl" />
            <div className="hidden md:block w-px bg-gray h-8"></div>
            <div className="group">
                <Button>
                    <ShoppingCartIcon className="w-6 h-6 stroke-Fuchsia" />
                </Button>
                <Basket className=" invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-200" />
            </div>
            <div className="font-morabba">
                {
                    isLoggedIn ?
                        <Button >
                            <UserIcon className="w-6 h-6" />
                        </Button>
                        : <NavLink href="/register" className="block">
                            <UserIcon className="w-6 h-6 " />
                        </NavLink>
                }
            </div>
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