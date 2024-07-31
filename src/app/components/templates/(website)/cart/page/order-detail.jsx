import Image from "next/image"
import Link from "next/link"
import { formatCurrency } from "@/app/lib/utils"
import Counter from "@/app/components/modules/Counter"
export default async function PrePreOrderDetail({ preOrders, className }) {
    return (
        <ol className={`flex-1 space-y-1 text-sm ${className}`}>
            {
                preOrders?.map(preOrder => (
                    <li
                        key={preOrder.fa}
                        className="min-h-20 flex odd:bg-white   first:rounded-t-lg last:rounded-b-lg overflow-hidden">
                        {preOrder?.thumbnail_url ?
                            <Image
                                height={72}
                                width={72}
                                src={preOrder.thumbnail_url}
                                alt={`تصویر محصول ${preOrder.fa}`}
                                className="object-contain aspect-square"
                            />
                            : null
                        }
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
                                            <Counter
                                                invoiceId={preOrder.id}
                                                productId={preOrder.product_id}
                                                quantity={preOrder.quantity} />
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
