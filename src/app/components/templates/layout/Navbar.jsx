import { Button, NavLink } from "@/app/components/modules/form"
import { ShoppingCartIcon, Bars3Icon, HomeIcon } from "@heroicons/react/24/outline"
import Searchbar from "./Searchbar"
import Basket from "./Basket"
const Navbar = () => {
    const isLoggedIn = true
    return (
        <div className="box  h-12 fixed inset-x-0  md:container md:top-2 bottom-0 flex gap-x-2  items-center  shadow-inner p-2 z-50">
            <div className="flex  items-center justify-between grow ">
                <div className="h-12 flex flex-row-reverse md:flex-row items-center gap-x-2">
                    <NavLink href="/" >
                        <HomeIcon className="w-6 h-6 stroke-Fuchsia" />
                    </NavLink>
                    <div className="hidden md:block w-px bg-gray h-8"></div>
                    <div className="hidden md:flex md:gap-x-2 lg:gap-x-4 font-morabba">
                        <NavLink href={"/products"}>محصولات</NavLink>
                        <NavLink href={"/contact-us"}>تماس با ما</NavLink>
                        <NavLink href={"/about-us"}>درباره ما</NavLink>
                    </div>
                    <Button className="md:hidden ">
                        <Bars3Icon className="w-6 h-6 stroke-Fuchsia" />
                    </Button>
                </div>
                <div className="group">
                    <Button>
                        <ShoppingCartIcon className="w-6 h-6 stroke-Fuchsia" />
                    </Button>
                    <Basket className=" invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-200"    />
                </div>

            </div>
            <div className="hidden md:block w-px bg-gray h-8"></div>
            <Searchbar className="fixed top-0 inset-x-0 shadow-md md:shadow-none  md:relative md:rounded-xl" />
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