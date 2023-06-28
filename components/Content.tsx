"use client";

import { buffer } from "stream/consumers";

export default function Content() {
  return (
    <div className="flex h-[50rem] w-full items-center justify-center  my-10 md:flex-row  ">
      <div className="w-[80%] h-[80%] flex  relative text-gray-300  backdrop-brightness-50  rounded-2xl overflow-hidden">
        <div className="text-gray-400  flex flex-col  pl-5 pt-5">
          <h1 className=" animate-pulse uppercase text-lg font-blod bg-gradient-to-r from-gray-900 via-gray-400 to-gray-900  bg-clip-text font-bold  text-transparent ">
            iPhone 14 Pro Max - Schwarz
          </h1>
          <h1 className="mt-5 pl-2">deaa</h1>
          <ul className="list-disc pl-5 mt-3">
            <li> deaa </li>
            <li> deaa </li>
            <li> deaa </li>
          </ul>
          <p className="text-sm mt-7 flex items-center  ">
            <span className="text-green-500 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </span>
            <span>Liefrungszeit innharlb 3Tage </span>
          </p>
          <button
            className="w-[60%] flex z-50 items-center justify-center text-center mt-5 rounded-full relative
            transition-all duration-150  font-bold  hover:animate-pulse hover:pointShadow
            py-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:opacity-20 "
          >
            <span className="text-sm ">EinKaufen mit</span>
            <span className="">
              <img
                className="h-10 "
                src="https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-PNG-Free-Image.png"
              />
            </span>
          </button>
        </div>

        <div className="h-[20rem] w-[22rem] lg:h-[30rem] lg:w-[40rem] absolute rounded-full    bg-indigo-900 lg:right-[15rem] lg:-bottom-[20rem] lg:rotate-12 -right-8 -bottom-8 z-0 animate-puls blur-xl  brightness-50 " />
        <div className="hidden lg:block w-[35rem] h-[50rem] rotate-[12deg]  absolute rounded-2xl  bg-indigo-900 -right-24 -bottom-16 z-0 animate-puls blur-xl brightness-50  " />
      </div>
      <img
        className=" z-50 absolute lg:right-32 right-8 bottom-7 h-72 lg:h-[22rem] xl:h-[25rem] rotate-[12deg] "
        src="https://static.esrgear.com/wp-content/uploads/2022/09/iPhone-14-Pro-Project-Zero-Clear-Case.png"
      />
    </div>
  );
}
