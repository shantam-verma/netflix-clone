import React from "react";

export default function VideoTitle({ title, description }) {
  return (
    <section className="w-full aspect-video invisible md:visible pt-[20%] pl-24 absolute text-white bg-gradient-to-r from-black">
      <h3 className="text-4xl font-bold">{title}</h3>
      <p className="py-6 text-lg lg:w-1/3">{description}</p>
      <div className="flex gap-5">
        <button className="flex gap-1 p-2 px-8 text-lg bg-red-700 rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>
        <button className="text-black bg-white rounded-3xl p-2 px-8 text-lg">
          Watch Trailer
        </button>
      </div>
    </section>
  );
}
