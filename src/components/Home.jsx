import React from "react";
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import img1 from "../images/IMG-20260104-WA0001.jpg";
import img2 from "../images/IMG-20260104-WA0013.jpg";
export default function Home() {
  return (
    <div className="">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            className="rounded h-[30rem] md:h-[120%] w-[100%] object-cover "
            src={img1}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="rounded h-[30rem] md:h-[120%] w-[100%]  object-cover"
            src={img2}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="rounded h-[30rem] md:h-[120%] w-[100%] object-cover  "
            src={img2}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="rounded h-[30rem] md:h-[120%] w-[100%] object-cover "
            src={img2}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
