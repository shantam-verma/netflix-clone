"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/images/Netflix_Logo.png";
import Netflix_profile_picture from "@/public/images/Netflix_profile_picture.webp";
import { useDispatch } from "react-redux";
import { togglePageView } from "../lib/redux/slices/searchSlice";

export default function Header() {
  const dispatch = useDispatch();
  const handleSearchToggle = () => {
    dispatch(togglePageView());
  };
  return (
    <nav className="absolute w-full z-10 lg:pl-36 lg:pr-36 flex flex-grow justify-between items-center">
      <Image width={150} src={logo} alt="Netflix logo" />
      <div className="flex gap-1">
        <button
          onClick={handleSearchToggle}
          className="text-white bg-purple-800 p-2 px-4 rounded-sm mr-5"
        >
          Search Movie
        </button>
        <Image
          className="w-10 h-10"
          src={Netflix_profile_picture}
          alt="profile-icon"
        />
        <button className="font-bold text-white p-1 py-0">(Sign Out)</button>
      </div>
    </nav>
  );
}
