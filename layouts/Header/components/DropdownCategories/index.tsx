import { CiGrid41 } from "react-icons/ci";

const DropdownCategories = () => {
  return (
    <span className="bg-violet-600 items-center gap-1 flex p-2 rounded-md">
      <CiGrid41 size={20} />
      <p>Browse All Categories</p>
    </span>
  );
};
export default DropdownCategories;
