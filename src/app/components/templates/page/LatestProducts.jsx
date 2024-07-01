import ProductsContainer from "@/app/components/templates/page/ProductsContainer"
import CardProduct from "../../modules/cards/CardProduct"
const LatestProducts = () => {
    const arr = new Array(10).fill("")
    return (
        <ProductsContainer title="آخرین محصولات" href="/products?orderBy=latests">
            {
                arr.map((item, index) => (
                    <CardProduct key={index + 1} href={index + 1} {...item} />

                ))
            }
        </ProductsContainer>
    )
}

export default LatestProducts