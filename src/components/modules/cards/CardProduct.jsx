import Image from "next/image"
import { formatCurrency } from "@/lib/utils"
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
        <div className="group bg-white rounded-lg overflow-hidden">
            {/* image  */}
            <Link
                href={`/products/${href}`}
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
            <div className="p-1 text-sm flex flex-col justify-between  min-h-32 overflow-hidden">
                    <Link href={`/products/${href}`} className="line-clamp-2 min-h-10 font-morabba font-thin">
                        {fa}
                    </Link>

                    <div className="flex gap-x-1">
                        {
                            colors?.map(item => (
                                <InputRadio
                                    key={item}
                                    name="color"
                                    disabled={true}
                                    color={item}
                                    className="w-3 h-3"
                                />
                            ))
                        }
                    </div>
                    <div className=" flex gap-x-1 ">
                        {
                            sizes?.map(item => (
                                <InputRadio
                                    key={item}
                                    name="size"
                                    disabled={true}
                                    className="min-w-8"
                                    >
                                    {item}

                                </InputRadio>
                            ))
                        }
                    </div>
                    <p>
                        {formatCurrency(price)}
                    </p>



            </div>
        </div>
    )
}

export default CardProduct