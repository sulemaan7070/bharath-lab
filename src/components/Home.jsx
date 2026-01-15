import React from "react";
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../images/IMG-20260104-WA0001.jpg";
import img2 from "../images/IMG-20260104-WA0013.jpg";
export default function Home() {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            className="rounded h-[10rem] md:h-[120%] w-[100%]  "
            src={img1}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="rounded h-[10rem] md:h-[120%] w-[100%]  "
            src={img2}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="rounded h-[10rem] md:h-[120%] w-[100%]  "
            src={img2}
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="rounded h-[10rem] md:h-[120%] w-[100%]  "
            src={img2}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
