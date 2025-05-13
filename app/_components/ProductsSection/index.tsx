import Category from "./components/Category";
import HotDeals from "./components/HotDeals";
import Popular from "./components/Popular";

const ProductsSection = () => {
  return (
    <section className="bg-white flex flex-col gap-5">
      <div className="w-[95%] m-auto">
        <Category />
      </div>
      <div className="w-full px-[3%] bg-[#f4f5f7]">
        <HotDeals />
      </div>
      <div className="w-full px-[3%] bg-white">
        <Popular />
      </div>
    </section>
  );
};
export default ProductsSection;
