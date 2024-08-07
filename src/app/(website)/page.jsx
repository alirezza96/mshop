import { Suspense } from "react";
import Landing from "@templates/page/Landing";
import LatestProducts from "@templates/page/LatestProducts";
import PopularProducts from "@templates/page/PopularProducts";
import ProductsContainer from "@templates/page/ProductsContainer";
import { CardsSkeleton } from "@modules/skeletons";
export const metadata = {
  title: "صفحه اصلی | بنفش شاپ"
}
const Home = () => {
  return (
    <div className="space-y-4">
      <Landing />
      <div className="container space-y-2">
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

    </div>
  );
}

export default Home