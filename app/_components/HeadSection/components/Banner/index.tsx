import { CiMinimize2 } from "react-icons/ci";
const BannerItem = () => {
  return (
    <div className="mx-4 md:text-xl flex gap-1 items-center">
      <CiMinimize2 size={25} />
      Free express shipping worldwide
    </div>
  );
};
const Banner = ({ count = 10 }: { count?: number }) => {
  const components = [];
  for (let i = 0; i < count; i++) {
    components.push(<BannerItem key={i} />);
  }
  return (
    <div className="bg-violet-500 py-3 md:py-5 w-full overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">{components}</div>
    </div>
  );
};
export default Banner;
