import LatestProducts from "./components/templates/page/LatestProducts";
import PopularProducts from "./components/templates/page/PopularProducts";

const Home = () => {
  return (
    <div className="">
      <LatestProducts />
      <PopularProducts />
    </div>
  );
}

export default Home