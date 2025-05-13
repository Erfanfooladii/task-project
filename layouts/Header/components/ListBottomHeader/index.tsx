import { FaAngleDown } from "react-icons/fa";

const ItemList = ({
  item,
  isIcon = true,
}: {
  item: string;
  isIcon?: boolean;
}) => (
  <li className="relative p-1 cursor-pointer hover:shadow-lg transition-all duration-300 group gap-1 flex items-center">
    <span>{item}</span>
    {isIcon ? <FaAngleDown /> : null}
    <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:right-auto"></span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:hidden"></span>
  </li>
);
const ListBottomHeader = () => {
  const listItems: string[] = ["Home", "Shop", "Products", "Pages", "Blog"];
  return (
    <ul className="flex items-center gap-1">
      {listItems.map((item, index) => (
        <ItemList key={index} item={item} />
      ))}
      <ItemList item="Boy now" isIcon={false} />
    </ul>
  );
};
export default ListBottomHeader;
