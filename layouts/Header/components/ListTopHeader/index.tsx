import React from "react";
import { FiHeart, FiShuffle, FiUser } from "react-icons/fi";

const ItemList = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <li className="flex cursor-pointer hover:text-violet-800 items-center justify-center gap-2">
      {icon}
      <span>{title}</span>
    </li>
  );
};
const ListTopHeader = () => {
  const listIcons: { title: string; icon: React.ReactNode }[] = [
    {
      title: "Login",
      icon: <FiUser size={24} />,
    },
    {
      title: "Campare",
      icon: <FiShuffle size={24} />,
    },
    {
      title: "Wishlist",
      icon: <FiHeart size={24} />,
    },
  ];
  return (
    <ul className="hidden gap-4 md:flex">
      {listIcons.map((item, index) => {
        return <ItemList key={index} title={item.title} icon={item.icon} />;
      })}
    </ul>
  );
};
export default ListTopHeader;
