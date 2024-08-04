import CardProduct from "../../modules/cards/CardProduct"
import { fetchLatestProducts } from "@/app/lib/data"
const LatestProducts = async () => {
    const latestProducts = await fetchLatestProducts()
    return latestProducts?.map((product) => (
        <CardProduct
            key={product.id}
            href={product.id}
            fa={product.name}
            en={product.english_name}
            src={product.thumbnail_url}
        />
    ))
}

export default LatestProducts