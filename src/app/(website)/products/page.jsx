import CardProduct from "@/components/modules/cards/CardProduct"
import { fetchFilteredProducts, fetchProducts, fetchProductsPages } from "@/lib/data"
import ProductsContainer from "@/components/templates/page/ProductsContainer"
import Pagination from "@/components/modules/pagination"
const page = async ({ searchParams }) => {
    const { q: query, page: currentPage = 1 } = searchParams
    const products = await fetchFilteredProducts(query, currentPage)
    const totalPages = await fetchProductsPages(query)
    return !products.length ? <h2>محصولی یافت نشد</h2> :
        (
            <>
                <ProductsContainer>
                    {
                        products?.map((product) => (
                            <CardProduct
                                key={product.id}
                                href={product.id}
                                fa={product.name}
                                en={product.english_name}
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