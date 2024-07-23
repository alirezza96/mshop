import Image from "next/image"
import { formatCurrency } from "@/app/lib/utils"
import { fetchPreOrderByCustomerId } from "@/app/lib/data"
import { FaceFrownIcon } from "@heroicons/react/24/outline"
import { tokenPayload } from "@/app/lib/auth"
import { Button } from "../../modules/form"
const Basket = async ({ className }) => {
    const payload = await tokenPayload()
    const { preOrder, rowCount } = await fetchPreOrderByCustomerId(payload.id)

    return (
        <>
            {/* counter  */}
            <div className="w-6 text-center rounded-full text-white bg-pink/80 e absolute top-0 ">
                {rowCount}
            </div>
            <div className={` absolute bottom-12 md:bottom-auto md:top-14 inset-x-0 box p-2  z-50 ${className} `}>
                {
                    !preOrder?.length ?
                        <div className="h-48 flex flex-col justify-center items-center">
                            <FaceFrownIcon className="w-10 h-10" />
                            سبد خرید شما خالی است!
                        </div>
                        :
                        <>
                            <div className="relative  min-h-48 max-h-80 overflow-y-auto">
                                <table className="w-full  " >
                                    <tbody >
                                        {
                                            preOrder?.map((item, index) => (

                                                <BasketCard key={index}  {...item} />
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>

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
const BasketCard = (props) => {
    return (
        <tr className="child:align-middle">
            <td>
                <div className="flex gap-2 my-1">
                    <Image
                        src={props.thumbnail_url}
                        alt={`تصویر محصول ${props.fa}`}
                        width={60}
                        height={80}
                        className="aspect-[3/4] object-contain rounded-lg"
                    />
                    <div>

                        <p className="font-bold">
                            {props.fa}
                        </p>
                        <p>
                            تعداد:
                            {props.quantity}
                        </p>
                        <p>
                            رنگ:
                            {props.color}
                        </p>
                        <p>
                            سایز:
                            {props.size}
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




export default Basket