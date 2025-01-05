import Image from "next/image"
import { formatCurrency } from "@/lib/utils"
import { fetchPreOrders } from "@/lib/data"
import { FaceFrownIcon } from "@heroicons/react/24/outline"
import { Button } from "../../../modules/form"
import PreOrderDetail from "../../cart/page/order-detail"
export default async function Basket({ className, userId }) {
    const { preOrders, rowCount } = await fetchPreOrders(userId)
    return (
        <>
            {/* counter  */}
            <Counter rowCount={rowCount} />
            <div className={`box absolute bottom-12 md:bottom-auto md:top-14 inset-x-0  p-2  z-50 ${className} `}>
                {
                    !preOrders?.length ?
                        <div className="h-48 flex flex-col justify-center items-center">
                            <FaceFrownIcon className="w-10 h-10" />
                            سبد خرید شما خالی است!
                        </div>
                        :
                        <>
                            <PreOrderDetail preOrders={preOrders} className="relative  min-h-48 max-h-80 overflow-y-auto" />
                            <div className="bg-pink/10 mt-2 rounded-lg px-2">
                                <table className="w-full table-fixed">
                                    <tbody>
                                        <tr>
                                            <td>
                                                جمع تخفیف:
                                            </td>
                                            <td>
                                                {formatCurrency(0)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                جمع کل:
                                            </td>
                                            <td>
                                                {formatCurrency(1200000)}
                                            </td>
                                        </tr>
                                        <tr className="border-t border-black border-dashed child:py-3">
                                            <td >
                                                مبلغ قابل پرداخت:
                                            </td>
                                            <td>
                                                {formatCurrency(1200000)}
                                            </td>
                                            <td className="text-left ">
                                                <Button href="/cart" className="p-2">
                                                    ادامه
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                }

            </div>
        </>
    )
}

const Counter = ({ rowCount }) => {
    const element = rowCount ?
        <div className="w-6  text-center rounded-full text-white bg-pink/80  absolute top-1 select-none">
            {rowCount}
        </div>
        : null
        return element
}

const BasketCard = (props) => {
    return (
        <tr className="child:align-middle">
            <td>
                <div className="flex gap-2 my-1">
                    {
                        props?.thumbnail_url ?
                            <Image
                                src={props.thumbnail_url}
                                alt={`تصویر محصول ${props.name}`}
                                width={60}
                                height={80}
                                className="aspect-[3/4] object-contain rounded-lg"
                            />
                            : null
                    }
                    <div>

                        <p className="font-bold">
                            {props.name}
                        </p>
                        <p>
                            تعداد:
                            {props.quantity}
                        </p>
                        <p>
                            رنگ:
                            {props.color_name}
                        </p>
                        <p>
                            سایز:
                            {props.size_name}
                        </p>
                    </div>
                </div>
            </td >
            <td>
                {/* <Counter className="float-left" /> */}
            </td>
            <td className="text-left">
                {props.price}
            </td>
        </tr>
    )
}



