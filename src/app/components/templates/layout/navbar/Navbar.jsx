const Navbar = () => {
    const isLoggedIn = true
    const isDesktopMode = true
    return isDesktopMode ? <DesktopMode /> : "mobile mode"
    // desktop | mobile
}

const DesktopMode = () => {
    return (
        <div className=" w-full flex flex-row-reverse bg-pink justify-between">
            {/* basket */}
            <div>
                سبد خرید
            </div>
            {/* links */}
            <nav>
                <ul className="flex">
                    <li>محصولات</li>
                    <li>بلاگ</li>
                    <li>درباره ما</li>
                    <li>تماس با ما</li>
                </ul>
            </nav>
            {/* logo */}
            <div>
                mshop
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