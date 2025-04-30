import ImageHead from "@/assets/headSection.jpg";
import ImageKeyBord from "@/assets/keybordImage.webp";
import ImageMouse from "@/assets/mouse.jpg";
import ItemLink from "./components/ItemLink";
import Banner from "./components/Banner";
import BenefitsSection from "./components/BenefitsSection";
const HeadSection = () => {
  return (
    <div className="flex flex-col">
      <section
        className="md:h-[85vh] w-full py-16 overflow-x-scroll md:overflow-x-hidden scrollbar-hide flex"
        style={{
          backgroundImage: `url(${ImageHead.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" relative md:w-[80%] inline-flex md:flex md:items-center gap-8  px-5 md:m-auto">
          <ItemLink title="Popular." src={ImageKeyBord.src} />
          <ItemLink title="Best Seller" src={ImageMouse.src} />
        </div>
      </section>
      <Banner />
      <BenefitsSection />
    </div>
  );
};
export default HeadSection;
