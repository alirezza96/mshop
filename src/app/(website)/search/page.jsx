import CardProduct from "@modules/cards/CardProduct"
import { fetchFilteredProducts, fetchProductsPages } from "@/lib/data"
import ProductsContainer from "@templates/page/ProductsContainer"
import Pagination from "@modules/pagination"
const page = async ({ searchParams }) => {
    const { q: query, page: currentPage = 1 } = searchParams
    const products = await fetchFilteredProducts(query, currentPage)
    console.log("products =>", products)
    const totalPages = await fetchProductsPages(query)
    return !products.length ? <h2 className="text-center">محصولی یافت نشد</h2> :
        (
            <>
                <ProductsContainer>
                    {
                        products?.map((product) => (
                            <CardProduct
                                key={product.id}
                                id={product.id}
                                href={product.id}
                                name={product.name}
                                englishName={product.english_name}
                                src={product.thumbnail_url}
                            />
                        ))
                    }
                </ProductsContainer >
                <Pagination totalPages={totalPages} />
            </>
        )
}
export default page