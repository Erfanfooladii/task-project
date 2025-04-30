import { FiShoppingBag } from "react-icons/fi";
const ButtonCart = () => {
  return (
    <button className="flex md:border-l-1 relative md:border-slate-500 pl-1 cursor-pointer hover:text-violet-800 items-center justify-center">
      <span className="bg-violet-600 hover:text-white p-1 md:w-6 w-4 md:h-6 h-4 flex items-center justify-center rounded-full absolute text-sm md:top-[-10px] top-[-6px] md:right-[-15px] right-[-10px]">
        0
      </span>
      <FiShoppingBag className="hidden md:block" size={45} />
      <FiShoppingBag className="block md:hidden" size={20} />
    </button>
  );
};
export default ButtonCart;
