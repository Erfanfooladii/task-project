import { CgSearch } from "react-icons/cg";

const ButtonSearchMobile = () => {
  return (
    <button className="hover:text-violet-700 md:hidden cursor-pointer flex items-center justify-center rounded-full p-2 ">
      <CgSearch size={25} />
    </button>
  );
};
export default ButtonSearchMobile;
