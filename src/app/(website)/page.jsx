import { Suspense } from "react";
import Landing from "@/app/components/templates/page/Landing";
import LatestProducts from "@/app/components/templates/page/LatestProducts";
import PopularProducts from "@/app/components/templates/page/PopularProducts";
import ProductsContainer from "@/app/components/templates/page/ProductsContainer";
import { CardsSkeleton } from "@/app/components/modules/skeletons";
export const metadata = {
  title: "صفحه اصلی | بنفش شاپ"
}
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