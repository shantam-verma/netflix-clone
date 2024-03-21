"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import netflix from "@/public/images/Login_Bg.jpg";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";
import ShimmerUI from "./ShimmerUI";

export default function Cards({ title, images }) {
  if (!images) {
    return <ShimmerUI title={title} />;
  }
  return (
    <div className="bg-black w-full">
      <h2 className="text-white font-bold text-2xl pb-10 px-24">{title} </h2>
      <Splide
        className="pb-10"
        options={{
          type: "loop",
          gap: "1rem",
          perPage: 8,
          pagination: false,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 0.3,
          },
          breakpoints: {
            600: {
              perPage: 2,
              gap: 0,
            },
            806: {
              perPage: 3,
              gap: 0,
            },
            992: {
              perPage: 4,
              gap: 0,
            },
          },
        }}
        extensions={{ AutoScroll }}
        // extensions={AutoScroll}
        // aria-label="My Favorite Images"
      >
        {images?.map((img, index) => (
          <SplideSlide key={index}>
            <Image
              width={200}
              height={200}
              src={IMG_CDN_URL + img?.poster_path}
              alt="logo"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
