"use client"
import Breadcrumb from "@/app/components/modules/Breadcrumb"
import Image from "next/image"
import cover from "/public/products/01.webp"
import { Button, InputRadio } from "@/app/components/modules/form"
import { HeartIcon } from "@heroicons/react/24/outline"
const breadcrumbs = [
    { fa: "پوشاک", eng: "wear" },
    { fa: "زنانه", eng: "womans" },
    { fa: "دامن", eng: "skirt" },
]
const colors = [
    "red", "yellow", "blue", "purple", "black", "white"
]
const sizes = [
    "xs", "sm", "ms", "lg", "xl", "xxl"
]
const page = () => {
    const like = false
    return (
        <div>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className="my-3 flex gap-x-2">
                <Image src={cover} height={540} width={405} className="rounded-lg" />
                <div >
                    <div className="grow space-y-2">

                        <div className="flex justify-between items-center">
                            <h2 className="text-xl">
                                تیشرت زنانه یقه گرد
                            </h2>
                            <HeartIcon className={`w-6 h-6 cursor-pointer hover:fill-Fuchsia/40 hover:text-Fuchsia ${like ? "fill-Fuchsia text-Fuchsia" : ""}`} />
                        </div>
                        <div className="h-px mt-4 bg-gray"></div>
                        <p className="text-sm/7 text-black/60">
                            کد محصول:
                            <span className="">
                                20301
                            </span>
                        </p>
                        <div className="flex items-center justify-between">
                            <span>
                                رنگ بندی:
                            </span>
                            <div className="flex gap-x-1">
                                {
                                    colors?.map((item, index) => (
                                        <InputRadio key={index} name="color" color={item} className="w-5 h-5" />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>
                                سایز بندی:
                            </span>
                            <div className="flex gap-x-1">
                                {
                                    sizes?.map((item, index) => (
                                        <InputRadio key={index} name="size" label={item} className={"border border-solid border-gray min-w-6"} />
                                    ))
                                }
                            </div>
                        </div>
                        <Button>
                            پرداخت
                        </Button>
                    </div>

                </div>
            </div>
        </div >
    )
}





export default page