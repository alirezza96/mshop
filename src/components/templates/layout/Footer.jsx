import Link from "next/link"

const Footer = ({className}) => {
    return (
        <div className={`flex justify-evenly box w-full p-2 ${className}`}>
            <div>
                <ul className="list-disc">
                    <li>
                        <Link href={"#"}>
                            قوانین و مقررات
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            شرایط بازگشت
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            گرانتی
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            تماس با ما
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="list-disc">
                    <li>
                        <Link href={"#"}>
                            بلاگ
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            جین وست
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            بادی اسپسنر
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            پرفروش ترین محصولات
                        </Link>
                    </li>
                </ul>

            </div>
            <div>
                <ul className="list-disc">
                    <li>
                        <Link href={"#"}>
                            اینستاگرام
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            تلگرام
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            واتساپ
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            توییتر
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer