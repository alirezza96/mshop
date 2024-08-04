import CardProduct from "../../modules/cards/CardProduct"
import { fetchPopularProducts } from "@/app/lib/data"
const PopularProducts = async () => {
    const popularProducts = await fetchPopularProducts()
    return popularProducts?.map((product) => (
        <CardProduct
            key={product.id}
            href={product.id}
            fa={product.name}
            en={product.english_name}
            src={product.thumbnail_url}
        />
    ))
}
export default PopularProducts