import CardProduct from "../../modules/cards/CardProduct"
import { fetchLatestProducts } from "@/lib/data"
const LatestProducts = async () => {
    const latestProducts = await fetchLatestProducts()
    return latestProducts?.map((product) => (
        <CardProduct
            key={product.id}
            id= {product.id}
            href={product.id}
            name={product.name}
            englishName={product.english_name}
            src={product.src}
        />
    ))
}

export default LatestProducts