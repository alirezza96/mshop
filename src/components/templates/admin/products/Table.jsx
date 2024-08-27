import { Button } from "@modules/form"
import { fetchFilteredProducts } from "@/lib/data"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
const Table = async ({ query, currentPage }) => {
    const products = await fetchFilteredProducts(query, currentPage)
    return (
        <table className="table-fixed w-full table ">
            <thead className="font-secondary">
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
                            className="child:align-middle table-row child:py-1"
                        >
                            <td>{product.id}</td>
                            <td >
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={product.thumbnail_url}
                                        className="rounded-full border border-solid border-gray aspect-square"
                                        width={48}
                                        height={48}
                                        alt={`تصویر محصول ${product.name}`}
                                    />
                                    <p className="line-clamp-2">
                                        {product.name}
                                    </p>
                                </div>
                            </td>
                            <td>{product.category_id}</td>
                            <td className="text-center">{1000}</td>
                            <td>
                                <div className="flex text-left gap-1">

                                    <Button
                                        href={`products/${product.id}/edit`}
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