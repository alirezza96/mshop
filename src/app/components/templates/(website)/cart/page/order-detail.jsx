"use client"
import Image from "next/image"
import Link from "next/link"
import Counter from "@/app/components/modules/Counter"
import { formatCurrency } from "@/app/lib/utils"
export default async function PrePreOrderDetail({ preOrders, className }) {
    const CounterHandel = (action) => {
        console.log("action =>", action)
        // console.log("state =>", state)
        // switch (action.type) {
        //     case "PLUS": {
        //         console.log("counter handler => PLUS")
        //         break;
        //     }
        //     case "MINUS": {
        //         console.log("counter handler => MINUS")
        //         break;
        //     }
        //     default: console.log("default")
        // }
    }

    return (
        <ol className={`flex-1 space-y-1 text-sm ${className}`}>
            {
                preOrders?.map(preOrder => (
                    <li
                        key={preOrder.fa}
                        className="min-h-20 flex odd:bg-white   first:rounded-t-lg last:rounded-b-lg overflow-hidden">
                        <Image
                            height={72}
                            width={72}
                            src={preOrder.thumbnail_url}
                            alt={`تصویر محصول ${preOrder.fa}`}
                            className="object-contain aspect-square"
                        />
                        <div className="space-y-2">

                            <Link href={`/products/${preOrder.id}`}>
                                {preOrder.fa}
                            </Link>
                            <table className="table-fixed w-full text-center">
                                <thead>
                                    <tr className="text-[#bbb]">
                                        <th>
                                            سایز
                                        </th>
                                        <th>
                                            رنگ
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="child:align-middle">
                                        <td>
                                            {preOrder.size}
                                        </td>
                                        <td>
                                            {preOrder.color}
                                        </td>
                                        <td>
                                            <Counter defaultValue={preOrder.quantity} onClick={() => CounterHandel(preOrder.id)} />
                                        </td>
                                        <td>
                                            {formatCurrency(preOrder.quantity * preOrder.price)}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                ))
            }
        </ol>
    )
}
