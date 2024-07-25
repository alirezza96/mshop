import { Button, Input } from "@/app/components/modules/form"
import { fetchPreOrders } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"
export default async function page() {
    const { preOrders } = await fetchPreOrders()
    console.log("preorder =>", preOrders)

    return (
        <div className="flex gap-2">
            <div className="flex gap-6 w-full">
                <ul className="bg-gray w-px flex flex-col justify-around items-center text-center">
                    <li className="border border-solid border-gray rounded-md bg-white w-6">1</li>
                    <li className="border border-solid border-gray rounded-md bg-white w-6">2</li>
                    <li className="border border-solid border-gray rounded-md bg-white w-6">3</li>
                </ul>
                <div className="w-full ">

                    <ul className="space-y-1 text-sm max-h-96  overflow-y-auto">
                        {
                            preOrders?.map(preOrder => (
                                <li
                                    key={preOrder.fa}
                                    className="h-[72px] flex odd:bg-white  first:rounded-t-lg last:rounded-b-lg overflow-hidden">

                                    <Image
                                        height={72}
                                        width={72}
                                        src={preOrder.thumbnail_url}
                                        alt={`تصویر محصول ${preOrder.fa}`}
                                        className="object-contain aspect-square"
                                    />
                                    <div>

                                        <Link href={`/products/${preOrder.id}`}>
                                            {preOrder.fa}
                                        </Link>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                </div>

            </div>
            <div className="flex flex-col justify-around bg-white w-96 max-h-40 rounded-lg p-2 sticky top-16">
                <table className="w-full">
                    <tbody >
                        <tr>
                            <td>
                                قیمت کالاها
                            </td>
                            <td className="text-left">
                                4,199,000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                جمع سبد خرید
                            </td>
                            <td className="text-left">
                                4,090,000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                سود شما از خرید
                            </td>
                            <td className="text-left">
                                109,000
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Button 
                href="#"
                className="block text-center my-2"
                >
                    تایید و تکمیل سفارش
                </Button>
                <Input 
                placeholder="کد تخفیف را وارد کنید"
                type="text">
                </Input>
            </div>

        </div>
    )
}
