import React from "react";
import SliderItems from "./components/SliderBenefits";
import { listBenefits } from "./data";
const BenefitsItem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex min-w-80 items-center gap-3">
      <div className="border-2 flex items-center justify-center rounded-full w-16 h-16 border-slate-200">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-xl text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <div className="bg-white border border-slate-400">
      <div className="m-auto hidden py-8 md:flex flex-wrap justify-center sm:gap-5 md:gap-2 md:justify-center md:w-[95%] w-full">
        {listBenefits.map((item, index) => (
          <BenefitsItem
            key={index}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
      <SliderItems />
    </div>
  );
};
export default BenefitsSection;
