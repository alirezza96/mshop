import CardProduct from "../../modules/cards/CardProduct"
import { fetchPopularProducts } from "@/app/lib/data"
const PopularProducts = async () => {
    const popularProducts = await fetchPopularProducts()
    return popularProducts?.map((product) => (
        <CardProduct
            key={product.id}
            href={product.id}
            fa={product.fa}
            en={product.en}
            src={product.thumbnail_url}
        />
    ))
}
export default PopularProducts