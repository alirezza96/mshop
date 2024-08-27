import Image from "next/image"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"
import Counter from "@modules/Counter"
export default async function PrePreOrderDetail({ preOrders, className }) {
    return (
        <ol className={`flex-1 space-y-1 text-sm ${className}`}>
            {
                preOrders?.map(preOrder => (
                    <li
                        key={preOrder.name}
                        className="min-h-20 flex odd:bg-white   first:rounded-t-lg last:rounded-b-lg overflow-hidden">
                        {preOrder?.thumbnail_url ?
                            <Image
                                height={72}
                                width={72}
                                src={preOrder.thumbnail_url}
                                alt={`تصویر محصول ${preOrder.name}`}
                                className="object-contain aspect-square"
                            />
                            : null
                        }
                        <div className="space-y-2">

                            <Link href={`/products/${preOrder.id}`}>
                                {preOrder.name}
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
                                            {preOrder.size_name}
                                        </td>
                                        <td>
                                            {preOrder.color_name}
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
