import { CgSearch } from "react-icons/cg";

const SearchHeader = () => {
  return (
    <div>
      <form className="bg-white md:flex hidden rounded-full p-1">
        <input
          type="text"
          className="min-w-96 focus:outline-none placeholder:text-slate-600 px-2"
          placeholder="Search product"
        />
        <button className="w-14 hover:bg-violet-700 cursor-pointer flex items-center justify-center rounded-full p-2 bg-slate-950">
          <CgSearch size={25} />
        </button>
      </form>
    </div>
  );
};
export default SearchHeader;
