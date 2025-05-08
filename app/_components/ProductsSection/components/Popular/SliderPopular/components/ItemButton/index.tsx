"use client";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { CiShuffle } from "react-icons/ci";
import { HiOutlineBookmark } from "react-icons/hi";
import "./style.css";
interface IconItem {
  icon: React.ReactElement<{ color?: string }>;
  title: string;
}

interface ContextItemProps {
  index: number;
  setHoveredIndex: (index: number | null) => void;
  item: IconItem;
  hoveredIndex: number | null;
}
const ContextItem = ({
  index,
  setHoveredIndex,
  item,
  hoveredIndex,
}: ContextItemProps) => (
  <span
    style={{
      bottom: "20px",
    }}
    key={index}
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
    className="popular_btn-icon relative p-3 m-1 transition-transform duration-300 ease-in-out bg-white hover:bg-black rounded-md"
  >
    {React.cloneElement(item.icon, {
      color: hoveredIndex === index ? "#fff" : "#000",
    })}
    <i
      className={`${
        hoveredIndex === index ? "flex" : "hidden"
      } absolute left-1/2 transform -translate-x-1/2 -translate-y-full top-[-10px] p-1 text-sm bg-slate-900 text-white whitespace-nowrap rounded-sm`}
    >
      {item.title}
    </i>
  </span>
);
const ItemButtonPopular = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const listIcons = [
    { icon: <AiOutlineHeart />, title: "Add to wishlist" },
    { icon: <CiShuffle />, title: "Add to campare" },
    { icon: <BsEye />, title: "Quick viwe" },
  ];

  return (
    <div className="flex gap-1 justify-center absolute bottom-[-25px] md:bottom-1 w-full">
      {listIcons.map((item, index) => (
        <ContextItem
          key={index}
          item={item}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </div>
  );
};

export default ItemButtonPopular;
