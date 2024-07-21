import Image from "next/image"
import cover from "/public/products/01.webp"
import { formatCurrency } from "@/app/lib/utils"
import { fetchPreOrderByCustomerId } from "@/app/lib/data"
const Basket = async ({ className }) => {
    const customerId = '9e179ac1-3f23-4a16-a74d-dffa66188459'
    const preOrder = await fetchPreOrderByCustomerId(customerId)
    return (
        <div className={` absolute bottom-12 md:bottom-auto md:top-14 inset-x-0 box p-2  min-h-48 max-h-96 overflow-y-auto z-50 ${className} `}>
            {/* <NotFound>
                سبد خرید شما خالی است!
            </NotFound> */}
            <table className="md:table-fixed w-full">

                <tbody >
                    {
                        preOrder.map((item, index) => (

                            <BasketCard key={index}  {...item} />
                        ))
                    }
                </tbody>
                <tfoot >
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
                    <tr className="border-t border-dashed leading-6">
                        <td>
                            مبلغ قابل پرداخت:
                        </td>
                        <td>
                            {formatCurrency(1200000)}
                        </td>
                        <td className="text-left ">
                            <button className="bg-Purple hover:bg-dark-purple text-white p-2 my-1 rounded-md min-w-24">
                                ادامه
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}



const BasketCard = (props) => {
    const price = 1_800_000
    return (
        <tr className="child:align-middle">
            <td>
                <div className="flex gap-2 my-1">
                    <Image
                        src={cover}
                        alt="Image Product"
                        width={60}
                        height={80}
                        className="aspect-[3/4] object-contain rounded-lg"
                    />
                    <div>

                        <p className="font-bold">
                            تیشرت زنانه مدل یقه گرد
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


const NotFound = ({ children }) => {
    return (
        <div className="flex justify-center place-items-center h-full">
            {children}
        </div>
    )
}


export default Basket