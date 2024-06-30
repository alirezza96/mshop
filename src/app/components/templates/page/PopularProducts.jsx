import ProductsContainer from "@/app/components/templates/page/ProductsContainer"
import CardProduct from "../../modules/cards/CardProduct"
const PopularProducts = () => {
    return (
        <ProductsContainer title="محبوبترین محصولات" href="/products?orderBy=popularity">
        </ProductsContainer>
    )
}

export default PopularProducts