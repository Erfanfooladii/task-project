"use client";
import ListBottomHeader from "./components/ListBottomHeader";
import ButtonMenu from "./components/Buttons/ButtonMenu";
import LogoHeader from "./components/LogoHeader";
import SearchHeader from "./components/SearchHeader";
import ListTopHeader from "./components/ListTopHeader";
import ButtonSearchMobile from "./components/Buttons/ButtonSearchMobile";
import ButtonCart from "./components/Buttons/ButtonCart";
import DropdownCategories from "./components/DropdownCategories";
import SupportHeader from "./components/SupportHeader";
import { useTopHeader } from "./hook";
export default function Header() {
  const { windowSize } = useTopHeader();
  console.log(windowSize);

  return (
    <header className="flex flex-col">
      <div className="bg-[rgb(35,37,46)] border-b border-slate-600">
        <div className="w-full px-4 md:w-[80%] justify-between md:m-auto flex md:justify-between items-center py-3 md:py-6">
          <div className="w-20 md:hidden">
            <ButtonMenu />
          </div>
          <LogoHeader />
          <SearchHeader />
          <div className="flex gap-3">
            <ListTopHeader />
            <ButtonSearchMobile />
            <ButtonCart />
          </div>
        </div>
      </div>
      <div className="bg-[rgb(35,37,46)] w-full py-3 hidden md:block">
        <div className="flex justify-between md:w-[80%] md:m-auto">
          <div className="flex gap-10">
            <DropdownCategories />
            <ListBottomHeader />
          </div>
          <SupportHeader />
        </div>
      </div>
    </header>
  );
}
