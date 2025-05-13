import { FaHeadset } from "react-icons/fa";

const SupportHeader = () => {
  return (
    <div className="flex gap-2 items-center">
      <FaHeadset size={40} />
      <div className="flex flex-col">
        <span className="text-violet-600 font-bold text-2xl">1900100888</span>
        <span className="text-sm">Support Center</span>
      </div>
    </div>
  );
};
export default SupportHeader;
