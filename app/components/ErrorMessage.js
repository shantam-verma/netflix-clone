import React from "react";

export default function ErrorMessage({ errors, touched }) {
  return (
    <React.Fragment>
      {errors && touched && (
        <div className="flex gap-1 text-red-800 font-semibold -mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          {errors}
        </div>
      )}
    </React.Fragment>
  );
}
