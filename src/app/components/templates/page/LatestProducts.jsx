import ProductsContainer from "@/app/components/templates/page/ProductsContainer"
const LatestProducts = () => {
    return (
        <ProductsContainer title="آخرین محصولات" href="/products?orderBy=latests">
        </ProductsContainer>
    )
}

export default LatestProducts