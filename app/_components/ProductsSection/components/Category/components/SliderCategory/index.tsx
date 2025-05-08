"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./categorySliderStyle.css";
import { Navigation, Pagination } from "swiper/modules";
import { CategoryTypes } from "../../type";
import useWindowWidth from "@/utils/useWindowWith";
import React from "react";

const SliderCategory = ({ data }: { data: CategoryTypes[] }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index = 4, className: string) {
      return (
        '<span class="' +
        className +
        '">' +
        '<span class="dot" style="display: block; width: 6px; height: 6px; background: #fff; border-radius: 50%;"></span>' +
        "</span>"
      );
    },
  };
  const width = useWindowWidth();

  return (
    <div className="relative">
      <Swiper
        className="swiper-category"
        slidesPerView={width <= 800 ? 2 : 4}
        pagination={pagination}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide-category">
            <div className="flex flex-col items-center gap-5">
              <div className="w-40 h-40 md:w-28 md:h-28 p-2 overflow-hidden rounded-md bg-slate-700">
                <img
                  src={item.image}
                  className="rounded-2xl object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                  loading="lazy"
                  alt={item.name}
                />
              </div>
              <h3 className="text-white font-bold">{item.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default React.memo(SliderCategory);
