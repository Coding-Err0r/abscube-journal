"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { data } from "@/config/data";
import RecentCard from "./RecentCard";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const RecentSection = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-12 text-center">
        Recent Issues
      </h1>
      <BrowserView>
        <Swiper
          className="w-full h-[8cm]"
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
        >
          {data.recents.map((value, index) => (
            <SwiperSlide key={index}>
              <RecentCard
                title={value.title}
                issue={value.issue}
                volume={value.volume}
                date={value.date}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </BrowserView>
      <MobileView>
        <Swiper
          className="w-full h-[8cm]"
          slidesPerView={1}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
        >
          {data.recents.map((value, index) => (
            <SwiperSlide key={index}>
              <RecentCard
                title={value.title}
                issue={value.issue}
                volume={value.volume}
                date={value.date}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </MobileView>
    </div>
  );
};

export default RecentSection;
