import CardProduct from "../../modules/cards/CardProduct"
import ProductsContainer from "./ProductsContainer"
import { fetchLatestProducts } from "@/lib/data"
const LatestProducts = async () => {
    const latestProducts = await fetchLatestProducts()
    return (

        < ProductsContainer title="آخرین محصولات" href="/products?orderBy=latests" >
            {
                latestProducts?.map((product) => (
                    <CardProduct
                        key={product.id}
                        id={product.id}
                        href={product.id}
                        name={product.name}
                        englishName={product.english_name}
                        src={product.src}
                    />
                ))
            }
        </ProductsContainer >
    )
}

export default LatestProducts