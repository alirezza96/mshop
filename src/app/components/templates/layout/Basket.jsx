import Image from "next/image"
import cover from "/public/products/01.webp"
import { formatCurrency } from "@/app/lib/utils"
import Counter from "@/app/components/modules/Counter"
const Basket = ({ className }) => {
    return (
        <div className={` absolute bottom-12 md:bottom-auto md:top-14 inset-x-0 box p-2  min-h-48 max-h-96 overflow-y-auto z-50 ${className} `}>
            {/* <NotFound>
                سبد خرید شما خالی است!
            </NotFound> */}
            <table className="md:table-fixed w-full">

                <tbody >
                    <BasketCard />
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
            {/* <div className="bg-pink  h-12">
            جمع کل: 1200000 | ادامه
            </div> */}

        </div>
    )
}



const BasketCard = () => {
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
                    <span className="font-bold">
                        تیشرت زنانه مدل یقه گرد
                    </span>
                </div>
            </td >
            <td>
                <Counter className="float-left" />
            </td>
            <td className="text-left">
                {formatCurrency(price)}
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