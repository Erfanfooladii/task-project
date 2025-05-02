// components/benefits/SliderItems.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import ItemBenefits from "../Item";
import { listBenefits } from "../../data";

const SliderItems = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<span class="' +
        className +
        '">' +
        '<span class="dot" style="display: block; width: 6px; height: 6px; background: #000; border-radius: 50%;"></span>' +
        "</span>"
      );
    },
  };

  return (
    <div className="pb-8 md:hidden block">
      <Swiper pagination={pagination} modules={[Pagination]}>
        {listBenefits.map((item, index) => (
          <SwiperSlide className="my-16 flex gap-4 flex-col" key={index}>
            <ItemBenefits {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderItems;
