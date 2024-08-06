import { Button } from "@/components/modules/form"
import { fetchFilteredProducts } from "@/lib/data"
import { formatNumber } from "@/lib/utils"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
const Table = async ({ query, currentPage }: { query: string, currentPage: number }) => {
    const products = await fetchFilteredProducts(query, currentPage)
    return (
        <table className="table-fixed w-full">
            <thead className="font-morabba">
                <tr>
                    <th>شناسه محصول</th>
                    <th>نام</th>
                    <th>دسته بندی</th>
                    <th>موجودی</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                {
                    products?.map(product => (
                        <tr
                            key={product.id}
                            className="child:align-middle "
                        >
                            <td>{product.id}</td>
                            <td >
                                <div className="flex items-center gap-2">
                                    {
                                        product.thumbnail_url ?
                                            <Image
                                                src={product.thumbnail_url}
                                                className="rounded-full"
                                                width={48}
                                                height={48}
                                                alt={`${product.english_name}'s product picture`}
                                            />
                                            : null
                                    }
                                    <p className="line-clamp-2">
                                        {product.name}
                                    </p>
                                </div>
                            </td>
                            <td>{product.category_id}</td>
                            <td className="text-center">{formatNumber(1000)}</td>
                            <td>
                                <div className="flex text-left">

                                    <Button
                                        href={`./${product.id}/edit`}
                                        className="p-2"
                                    >
                                        <PencilIcon className="w-5 " />
                                    </Button>

                                    <Button
                                        className="p-2"
                                    >
                                        <TrashIcon className="w-5 " />
                                    </Button>
                                </div>

                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table