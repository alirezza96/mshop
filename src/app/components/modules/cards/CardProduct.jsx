import cover from "/public/products/01.webp"
import Image from "next/image"
import { formatCurrency } from "@/app/lib/utils"
import Link from "next/link"
import { InputRadio } from "../form"


const colors = [
    "red", "yellow", "blue", "purple", "black", "white"
]
const sizes = [
    "xs", "sm", "ms", "lg", "xl", "xxl"
]
const CardProduct = () => {
    const price = 1_800_000

    return (
        <div className="mx-1 min-w-[180px] box rounded-md overflow-hidden">
            {/* image  */}
            <Link href={"#"} className="disabled-drag">
                <Image
                    src={cover}
                    height={240}
                    width={180}
                    className="disabled-drag"
                />
            </Link>
            <div className="p-1 text-sm flex flex-col justify-between ">
                <div className="space-y-1  h-24 ">
                    <p className="line-clamp-2">
                        تیشرت زنانه مدل یقه گرد
                    </p>
                    <div className="flex items-center justify-between">
                        <span>
                            رنگ بندی:
                        </span>
                        <div className="flex gap-x-1">
                            {
                                colors?.map((item, index) => (
                                    <InputRadio key={index} name="color" disabled={true} color={item} className="w-3 h-3" />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex items-center justify-between  ">
                        <span className="">
                            سایز بندی:
                        </span>
                        <div className=" flex gap-x-1 ">


                            {
                                sizes?.map((item, index) => (
                                    <InputRadio key={index} name="size" label={item} disabled={true}  />
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex items-center justify-between  ">
                        <span className="">
                            قیمت:
                        </span>
                        {formatCurrency(price)}
                    </div>



                </div>
                <button className="bg-Purple hover:bg-dark-purple text-white p-2 rounded-md w-full">مشاهده</button>
            </div>
        </div>
    )
}

export default CardProduct