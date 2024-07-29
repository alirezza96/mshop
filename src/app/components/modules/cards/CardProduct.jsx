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
const CardProduct = ({ href, fa, en, src }) => {
    const price = 1_800_000
    return (
        <div className="group">
            {/* image  */}
            <Link
                href={`/products/${href}`}
                target="_blank"
                className="disabled-drag"
            >
                <div className="h-64 w-48 mx-auto">
                    {
                        src ?
                            <Image
                                src={src}
                                height={256}
                                alt="image product"
                                width={192}
                                className="disabled-drag aspect-[3/4] object-cover group-hover:scale-105 transition-transform delay-100 "
                            />
                            : null
                    }
                </div>
            </Link>
            <div className="p-1 text-sm flex flex-col justify-between  min-h-40">
                <div className="space-y-1   ">
                    <Link href={`/products/${href}`} className="line-clamp-2 min-h-10">
                        {fa}
                    </Link>
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
                                    <InputRadio key={index} name="size" label={item} disabled={true} />
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
            </div>
        </div>
    )
}

export default CardProduct