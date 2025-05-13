import { BiSupport } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { CgCornerDownLeft, CgDesktop } from "react-icons/cg";
import { ListBenefits } from "./types";

export const listBenefits: ListBenefits[] = [
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
