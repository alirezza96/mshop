import Landing from "./components/templates/page/Landing";
import LatestProducts from "./components/templates/page/LatestProducts";
import PopularProducts from "./components/templates/page/PopularProducts";

const Home = () => {
  return (
    <div className="">
      <Landing />
      <LatestProducts />
      <PopularProducts />
    </div>
  );
}

export default Home