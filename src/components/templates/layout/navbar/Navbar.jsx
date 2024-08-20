import { Button, NavLink } from "@modules/form"
import { ShoppingCartIcon, Bars3Icon, HomeIcon } from "@heroicons/react/24/outline"
import Search from "@modules/Search"
import Basket from "./Basket"
import { Suspense } from "react"
import { BasketContentSkeleton } from "@modules/skeletons"
import ProfileOptions from "@modules/profile-options"
export default async function Navbar() {
    const payload = {isAuth: true}
    return (
        <div className="px-8  md:px-2 h-12 flex items-center gap-x-1 lg:gap-x-2 fixed inset-x-0 bottom-0  md:top-1  md:container  box    z-50">
            <div className="flex  items-center justify-between grow ">
                <div className="h-12 flex flex-row-reverse md:flex-row items-center gap-x-2">
                    <NavLink href="/" >
                        <HomeIcon className="w-6 h-6" />
                    </NavLink>
                    <Divider />
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
                    <Button className="md:hidden p-2 bg-transparent">
                        <Bars3Icon className="w-6 h-6 stroke-Fuchsia" />
                    </Button>
                </div>

            </div>
            <Search globalSearch={true} className="fixed top-0 inset-x-0 md:relative md:rounded-xl " />
            <Divider />
            <div className="group">
                <button href="/cart" className="p-2 inline-flex">
                    <ShoppingCartIcon className="w-6 h-6 stroke-Fuchsia" />
                </button>
                <Suspense fallback={<BasketContentSkeleton />}>
                    <Basket className=" invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-200" />
                </Suspense>
            </div>

            <ProfileOptions isAuth={payload?.isAuth} />


        </div>
    )
}
const Divider = () => (
    <div className="hidden md:block w-px bg-gray h-8"></div>
)


const LoggedIn = (isLoggedIn) => {
    const loggedIn =
        <div>
            <div className="bg-red-300 h-16 w-16">
                A
            </div>
        </div>
}


