import { Suspense } from "react";
import Landing from "./components/templates/page/Landing";
import LatestProducts from "./components/templates/page/LatestProducts";
import PopularProducts from "./components/templates/page/PopularProducts";
import ProductsContainer from "./components/templates/page/ProductsContainer";
import { CardSkeleton1 } from "./components/modules/skeletons";
const Home = () => {
  return (
    <div className="">
      <Landing />
      <ProductsContainer title="آخرین محصولات" href="/products?orderBy=latests">
          <LatestProducts />
          <CardSkeleton1/>
      </ProductsContainer>

      <PopularProducts />
    </div>
  );
}

export default Home