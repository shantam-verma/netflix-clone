import React from "react";

export default function Search() {
  return (
    <div className="bg-opacity">
      <div className="content">
        <div className="flex min-h-[50%] items-center justify-center text-white">
          <div className="flex gap-5 w-screen sm:w-[80%] lg:w-1/2 bg-black px-8 py-5 rounded-sm">
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 bg-[#161616b3] rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search Movies"
              required
            />
            <button className="bg-red-700 w-1/3 px-5 rounded-sm flex gap-3 justify-center items-center">
              Search
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 font-bold"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
