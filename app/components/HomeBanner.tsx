"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const HomeBanner = () => {
  return (
    <Swiper
      // install Swiper modules
      className="home_slider"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay
    >
      <SwiperSlide>
        <div className="banner relative bg-gradient-to-r from-slate-200 to-slate-200 mb-8 max-w-full max-h-full">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-0 md:flex-row items-left justify-evenly">
            <div className="mb-8 md:mb-0 text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                NextJS Full Stack website!
              </h1>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP1: Send business name
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP2: Send products photo
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP3: Done. Delivery 3 hours
              </p>
              <div className="gap-x-4 ">
                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    CHECK DEMO
                  </button>
                </Link>

                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded p-10 m-4">
                    BUY NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/3 relative aspect-video">
              <Image
                src="/banner-image.png"
                fill
                alt="Banner Image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner relative bg-gradient-to-r from-slate-200 to-slate-200 mb-8 max-w-full max-h-full">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-0 md:flex-row items-left justify-evenly">
            <div className="mb-8 md:mb-0 text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                ReactJS Full Stack website!
              </h1>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP1: Send business name
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP2: Send products photo
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP3: Done. Delivery 3 hours
              </p>
              <div className="gap-x-4 ">
                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    CHECK DEMO
                  </button>
                </Link>

                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded p-10 m-4">
                    BUY NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/3 relative aspect-video">
              <Image
                src="/banner-image.png"
                fill
                alt="Banner Image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner relative bg-gradient-to-r from-slate-200 to-slate-200 mb-8 max-w-full max-h-full">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-0 md:flex-row items-left justify-evenly">
            <div className="mb-8 md:mb-0 text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                Laravel Full Stack website!
              </h1>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP1: Send business name
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP2: Send products photo
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP3: Done. Delivery 3 hours
              </p>
              <div className="gap-x-4 ">
                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    CHECK DEMO
                  </button>
                </Link>

                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded p-10 m-4">
                    BUY NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/3 relative aspect-video">
              <Image
                src="/banner-image.png"
                fill
                alt="Banner Image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner relative bg-gradient-to-r from-slate-200 to-slate-200 mb-8 max-w-full max-h-full">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-0 md:flex-row items-left justify-evenly">
            <div className="mb-8 md:mb-0 text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                WordPress Full Stack website!
              </h1>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP1: Send business name
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP2: Send products photo
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP3: Done. Delivery 3 hours
              </p>
              <div className="gap-x-4 ">
                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    CHECK DEMO
                  </button>
                </Link>

                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded p-10 m-4">
                    BUY NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/3 relative aspect-video">
              <Image
                src="/banner-image.png"
                fill
                alt="Banner Image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner relative bg-gradient-to-r from-slate-200 to-slate-200 mb-8 max-w-full max-h-full">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-0 md:flex-row items-left justify-evenly">
            <div className="mb-8 md:mb-0 text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                Shopify Full Stack website!
              </h1>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP1: Send business name
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP2: Send products photo
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP3: Done. Delivery 3 hours
              </p>
              <div className="gap-x-4 ">
                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    CHECK DEMO
                  </button>
                </Link>

                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded p-10 m-4">
                    BUY NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/3 relative aspect-video">
              <Image
                src="/banner-image.png"
                fill
                alt="Banner Image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner relative bg-gradient-to-r from-slate-200 to-slate-200 mb-8 max-w-full max-h-full">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-0 md:flex-row items-left justify-evenly">
            <div className="mb-8 md:mb-0 text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                Wix Full Stack website!
              </h1>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP1: Send business name
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP2: Send products photo
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP3: Done. Delivery 3 hours
              </p>
              <div className="gap-x-4 ">
                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    CHECK DEMO
                  </button>
                </Link>

                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded p-10 m-4">
                    BUY NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/3 relative aspect-video">
              <Image
                src="/banner-image.png"
                fill
                alt="Banner Image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner relative bg-gradient-to-r from-slate-200 to-slate-200 mb-8 max-w-full max-h-full">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-0 md:flex-row items-left justify-evenly">
            <div className="mb-8 md:mb-0 text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                Mobile App Full Stack!
              </h1>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP1: Send business name
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP2: Send products photo
              </p>
              <p className="text-sm md:text-xl text-black mb-2 ">
                STEP3: Done. Delivery 3 hours
              </p>
              <div className="gap-x-4 ">
                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    CHECK DEMO
                  </button>
                </Link>

                <Link href={"/demo"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded p-10 m-4">
                    BUY NOW
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/3 relative aspect-video">
              <Image
                src="/banner-image.png"
                fill
                alt="Banner Image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default HomeBanner;
