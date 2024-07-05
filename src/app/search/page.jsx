import CardProduct from "../components/modules/cards/CardProduct"
import { fetchFilteredProducts } from "@/app/lib/data"
const page = async ({ searchParams }) => {
    const { q: query, page: currentPage = 1 } = searchParams
    const products = await fetchFilteredProducts(query, currentPage)
    return !products.length ? <h2>محصولی یافت نشد</h2> :
        (
            <div className="flex gap-2 ">
                {
                    products?.map((product) => (
                        <CardProduct
                            key={product.id}
                            href={product.id}
                            fa={product.fa}
                            en={product.en}
                            src={product.thumbnail_url}
                        />
                    ))
                }
            </div>

        )
}
export default page