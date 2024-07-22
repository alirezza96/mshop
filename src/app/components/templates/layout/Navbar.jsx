import { Button, Input, NavLink } from "@/app/components/modules/form"
import { ShoppingCartIcon, Bars3Icon, HomeIcon, UserIcon, PowerIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline"
import Search from "@/app/components/modules/Search"
import Basket from "./Basket"
import { Suspense } from "react"
import { BasketContentSkeleton } from "../../modules/skeletons"
import { logout } from "@/app/lib/actions"
import { tokenPayload } from "@/app/lib/auth"
export default async function Navbar() {
    const payload = await tokenPayload()
    console.log("payload =>", payload)

    return (
        <div style={{ padding: "0 5px" }} className="h-12 flex items-center gap-x-1 lg:gap-x-2 fixed inset-x-0 bottom-0 md:top-2  md:container  box   z-50">
            <div className="flex  items-center justify-between grow ">
                <div className="h-12 flex flex-row-reverse md:flex-row items-center gap-x-2">
                    <NavLink href="/" >
                        <HomeIcon className="w-6 h-6" />
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
                    <Button className="md:hidden p-2">
                        <Bars3Icon className="w-6 h-6 stroke-Fuchsia" />
                    </Button>
                </div>

            </div>
            <Search globalSearch={true} className="fixed top-0 inset-x-0 shadow-md md:shadow-none  md:relative md:rounded-xl" />
            <div className="hidden md:block w-px bg-gray h-8"></div>
            <div className="group">
                <Button className="p-2">
                    <ShoppingCartIcon className="w-6 h-6 stroke-Fuchsia" />
                </Button>
                <Suspense fallback={<BasketContentSkeleton />}>
                    <Basket className=" invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-200" />
                </Suspense>
            </div>
            <div className="group">
                <NavLink
                    href="/register"
                    className="inline-flex"
                >
                    <UserIcon className="w-6 h-6 " />
                </NavLink>
                {
                    payload &&
                    <div className="font-morabba w-48 h-32 absolute left-0 top-14 py-4 px-2 box z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all delay-200">
                        <ul className="space-y-2">
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
                    </div>
                }
            </div>
            {/* <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form> */}

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


