import cover from "/public/products/01.webp"
import Image from "next/image"
import { formatCurrency } from "@/app/lib/utils"
import Link from "next/link"

const CardProduct = () => {
    const price = 1_800_000

    return (
        <div className="mx-1 w-fit  box overflow-hidden">
            {/* image  */}
            <Link href={"#"}>
                <Image
                    src={cover}
                    height={240}
                    width={180}
                />
            </Link>
            <div className="p-1 text-sm flex flex-col justify-between ">
                <div className="space-y-1  h-24 overflow-y-hidden">
                    <p className="line-clamp-2">
                        تیشرت زنانه مدل یقه گرد
                    </p>
                    <div className="flex items-center justify-between">
                        <span>
                            رنگ بندی:
                        </span>
                        <div className="flex gap-x-1">
                            <div className="bg-Fuchsia w-3 h-3 rounded-sm   border border-solid border-gray"></div>
                            <div className="bg-Purple w-3 h-3 rounded-sm   border border-solid border-gray"></div>
                            <div className="bg-black w-3 h-3 rounded-sm   border border-solid border-gray"></div>
                            <div className="bg-white w-3 h-3 rounded-sm   border border-solid border-gray"></div>
                            <div className="bg-Blue w-3 h-3 rounded-sm   border border-solid border-gray"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>
                            سایز بندی:
                        </span>
                        <div className="flex gap-x-1 divide-x-4 divide-y-2 divide-black  ">
                            <span>xs</span>
                            <span className="text-gray">sm</span>
                            <span className="text-gray">md</span>
                            <span>lg</span>
                            <span className="text-gray">xl</span>
                        </div>
                    </div>


                </div>
                <button className="bg-Purple hover:bg-dark-purple text-white p-2 rounded-md w-full">{formatCurrency(price)}</button>
            </div>
        </div>
    )
}

export default CardProduct