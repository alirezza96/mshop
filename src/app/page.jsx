import { Suspense } from "react";
import Landing from "./components/templates/page/Landing";
import LatestProducts from "./components/templates/page/LatestProducts";
import PopularProducts from "./components/templates/page/PopularProducts";
import ProductsContainer from "./components/templates/page/ProductsContainer";
import { CardsSkeleton } from "./components/modules/skeletons";
const Home = () => {
  return (
    <div className="space-y-4">
      <Landing />
      <ProductsContainer title="آخرین محصولات" href="/products?orderBy=latests">
        <Suspense fallback={<CardsSkeleton cards={4} />}>
          <LatestProducts />
        </Suspense>
      </ProductsContainer>
      <ProductsContainer title="محبوبترین محصولات" href="/products?orderBy=latests">
        <Suspense fallback={<CardsSkeleton cards={4} />}>
          <PopularProducts />
        </Suspense>
      </ProductsContainer>

    </div>
  );
}

export default Home