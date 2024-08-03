import CardProduct from "../../modules/cards/CardProduct"
import { fetchLatestProducts } from "@/app/lib/data"
const LatestProducts = async () => {
    const latestProducts = await fetchLatestProducts()
    return latestProducts?.map((product) => (
        <CardProduct
            key={product.id}
            href={product.id}
            fa={product.name}
            en={product.label}
            src={product.thumbnail_url}
        />
    ))
}

export default LatestProducts