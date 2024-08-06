import { Button, NavLink } from "@/components/modules/form"
import { Bars3Icon, GlobeAltIcon, HomeIcon } from "@heroicons/react/24/outline"
import ProfileOptions from "@/components/modules/profile-options"
const Navbar = () => {
    return (
        <div style={{ padding: "0 5px" }} className="h-12 flex items-center gap-x-1 lg:gap-x-2">
            <div className="flex  items-center justify-between grow ">
                <div className="h-12 flex flex-row-reverse md:flex-row items-center gap-x-2">
                    <NavLink href="/admin" >
                        <HomeIcon className="w-6 h-6" />
                    </NavLink>
                    <NavLink href="/" >
                        <GlobeAltIcon className="w-6 h-6" />
                    </NavLink>
                    <div className="hidden md:block w-px bg-gray h-8"></div>
                    <div className="hidden md:flex md:gap-x-2 lg:gap-x-4 font-morabba">
                        <NavLink href={"admin/products"} className="group">
                            محصولات
                            <div className=" absolute bottom-12 md:bottom-auto md:top-12 inset-x-0 shadow-md bg-white p-2  min-h-48 max-h-96 overflow-y-auto z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-200">
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
                        <NavLink href={"admin/customers"}>مشتریان</NavLink>
                        <NavLink href={"admin/invoices"}>سفارشات</NavLink>
                    </div>
                    <Button className="md:hidden p-2">
                        <Bars3Icon className="w-6 h-6" />
                    </Button>
                </div>

            </div>
            <ProfileOptions />
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