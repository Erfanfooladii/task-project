import React from "react";
import { BiSupport } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { CgCornerDownLeft, CgDesktop } from "react-icons/cg";
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
    <div className="flex items-center gap-3">
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
  const listBenefits = [
    {
      title: "Free Shipping",
      icon: <BsBoxSeam color="#000" size={30} />,
      description: "You will love at great low prices",
    },
    {
      title: "Flexible Payment",
      icon: <CgDesktop color="#000" size={30} />,
      description: "Pay with Multiple Credit Cards",
    },
    {
      title: "14 Day Returns",
      icon: <CgCornerDownLeft color="#000" size={30} />,
      description: "Within 30 days for an exchange",
    },
    {
      title: "Premium Support",
      icon: <BiSupport color="#000" size={30} />,
      description: "Outstanding premium support",
    },
  ];
  return (
    <div className="bg-white">
      <div className="m-auto py-3 flex flex-wrap md:flex-nowrap justify-center md:justify-between sm:gap-5 md:gap-0 md:w-[80%] w-full">
        {listBenefits.map((item, index) => (
          <BenefitsItem
            key={index}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
export default BenefitsSection;
