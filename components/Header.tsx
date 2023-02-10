"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-start px-6 pt-5  ">
      <img
        src="https://cdn.dribbble.com/users/1161517/screenshots/7896076/media/24ae74ddb6c9eb7789ae3a189a6b30ae.gif"
        alt=""
        className="h-12  mt-4 animate-pulse"
      />
      <h1 className=" text-gray-300 mt-6 animate-pulse hover:bg-gray-800 hover:text-amber-500 hover:rounded-xl hover:px-1 hover:py-1 cursor-pointer  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </h1>
    </div>
  );
}
