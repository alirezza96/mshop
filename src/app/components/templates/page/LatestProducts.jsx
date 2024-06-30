import ProductsContainer from "@/app/components/templates/page/ProductsContainer"
import CardProduct from "../../modules/cards/CardProduct"
const LatestProducts = () => {
    return (
        <ProductsContainer title="آخرین محصولات" href="/products?orderBy=latests">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
        </ProductsContainer>
    )
}

export default LatestProducts