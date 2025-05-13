"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./hotdealSliderStyle.css";
import { Pagination } from "swiper/modules";
import useWindowWidth from "@/utils/useWindowWith";
import React from "react";
import { HotDealsType } from "../type";
import ItemButtonHotdeal from "./components/ItemButton";

const SliderHotDeals = ({ data }: { data: HotDealsType[] }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index = 4, className: string) {
      return (
        '<span class="' +
        className +
        '">' +
        '<span class="dot" style="display: block; width: 6px; height: 6px; background: #000; border-radius: 50%;"></span>' +
        "</span>"
      );
    },
  };
  const width = useWindowWidth();
  return (
    <div className="relative pb-11">
      <Swiper
        className="swiper-hotdeal"
        slidesPerView={width <= 800 ? 1 : 4}
        pagination={pagination}
        modules={[Pagination]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide-hotdeal">
            <div className="w-full h-full p-3 flex flex-col gap-1 md:gap-5">
              <div className="image_frame w-full h-40 md:h-full relative overflow-hidden rounded-md">
                <img
                  src={item.image}
                  className=" object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                  loading="lazy"
                  alt={item.name}
                />
                {item.discount?.hasDiscount ? (
                  <span className="bg-[#fc5732] z-10 text-sm px-3 py-1 absolute top-2 rounded-full shadow right-2">
                    {item.discount?.percentage} %
                  </span>
                ) : null}
                <div className="hotdeal_btn-container">
                  <ItemButtonHotdeal />
                </div>
              </div>
              <h3 className="text-black font-bold">{item.name}</h3>
              {item.discount.hasDiscount ? (
                <div className="flex justify-center gap-2">
                  <p
                    className={`text-slate-500 line-through font-bold text-sm`}
                  >
                    ${item.price}
                  </p>
                  <p className={`text-red-500 font-bold text-sm`}>
                    ${item.discount.discountedPrice}
                  </p>
                </div>
              ) : (
                <p className={`text-slate-500 font-bold text-sm`}>
                  ${item.price}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React.memo(SliderHotDeals);
