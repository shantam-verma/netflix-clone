import React from "react";

export default function ShimmerUI({ title }) {
  return (
    <div className="bg-black z-10 absolute w-full">
      <div>
        <h2 className="text-white font-bold text-2xl -mt-20 pb-10 px-24">
          {title}
        </h2>
        <div className="flex gap-2 w-screen bg-black py-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <div
              key={index}
              className="animate-pulse w-[12.5%;] h-60 flex bg-slate-700 rounded-sm"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
