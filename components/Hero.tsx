"use client";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className=" flex-col lg:flex-row flex items-center justify-center gap-8 my-36 pt-24">
      {/* 
      /// card test 1
         <div className="h-72 w-72 relative cursor-pointer mb-5">
        <div className="absolute inset-0 bg-white opacity-10 rounded-lg shadow-2xl"></div>
        <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
          <div className="h-full w-full  backdrop-brightness-100 rounded-lg shadow-2xl">
            <img
              src="https://about.powermaccenter.com/wp-content/uploads/2022/09/RX-S1_Smart_1-1-1024x794.png"
              alt="card1"
              className="object-fill h-full"
            />
          </div>
        </div>
      </div>
      */}

      {/*
      /* card test 2
      
        <div className="block   w-72 rounded-xl bg-[#111] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat rounbded-t-xl"
          //data-te-ripple-init
          //data-te-ripple-color="light"
        >
          <img
            className="rounded-t-lg"
            src="https://about.powermaccenter.com/wp-content/uploads/2022/09/RX-S1_Smart_1-1-1024x794.png"
            alt=""
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full  overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 rounded-t-xl"></div>
          </a>
        </div>
        <div className="p-6   backdrop-brightness-50 rounded-b-xl bg-gradient-to-t from-[#111] to-black ">
          <h5 className="mb-2 text-xl font-medium leading-tight  text-purple-400 shadow-2xl  ">
            Card title
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            className="text-gray-600 relative rounded-full bg-[#111] w-full py-2 my-3
           transition-all duration-150  font-bold link animate-puls 
            bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-0
          "
          >
            Button
          </button>
        </div>
      </div>    
    */}
      {/* Card 1 */}
      <div className="h-[26.5rem] w-72  bg-transparent cursor-pointer group prespective rounded-2xl ">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute group w-full  h-full backface-hiiden rounded-xl ">
            <div className="absolute w-full h-full   text-[#111] py-32 flex flex-col items-center  bottom-0 left-0 z-50 rounded-2xl">
              <h1 className="  uppercase text-[12px] font-bold px-2   ">
                Some quick example text to build on
              </h1>
              <h1 className="  uppercase text-[12px] font-bold px-2  py-6">
                Some quick example text
              </h1>
              <button
                className=" text-gray-300 rounded-xl z-50 bg-black py-1 px-3  top-[90%] right-[10%] absolute  animate-pulse
               bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:opacity-0 
              "
              >
                More info
              </button>
            </div>
            <img
              className=" sepia group-hover:sepia-0 group-hover:transition-all group-hover:duration-500 group-hover:ease-out -hue-rotate-15 z-0 object-fill h-full w-full rounded-2xl"
              //src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-pro-max-deep-purple.png?v=35"
              src="https://about.powermaccenter.com/wp-content/uploads/2022/09/RX-S1_Smart_1-1-1024x794.png"
              alt=""
            />
          </div>
          <div className="absolute w-full h-[26.5rem]  my-rotate-y-180 backface-hiiden  rounded-2xl">
            <div className="block    w-72 rounded-xl bg-[#111] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat rounbded-t-xl"
                //data-te-ripple-init
                //data-te-ripple-color="light"
              >
                <img
                  className="rounded-t-lg h-full "
                  src="https://about.powermaccenter.com/wp-content/uploads/2022/09/RX-S1_Smart_1-1-1024x794.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full  overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 rounded-t-xl"></div>
              </div>
              <div className="p-6   backdrop-brightness-50 rounded-b-xl bg-gradient-to-t from-[#111] to-black ">
                <h5 className="mb-2 text-xl font-medium leading-tight  text-purple-400 shadow-2xl  ">
                  Card title
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="text-gray-600 relative rounded-full bg-[#111] w-full py-2 my-3
                  transition-all duration-150  font-bold link animate-puls 
                  bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-0
                  "
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*card 2 */}
      <div className="h-[26.5rem] w-72  bg-transparent cursor-pointer group prespective rounded-2xl ">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute group  w-full h-full backface-hiiden rounded-2xl   backdrop-blur">
            <div className="absolute w-full h-full text-[#111] py-32 flex flex-col items-center  bottom-0 left-0 z-50 rounded-2xl">
              <h1 className="  uppercase text-[12px] font-bold px-2  ">
                Some quick example text to build on
              </h1>
              <h1 className="  uppercase text-[12px] font-bold px-2  py-6">
                Some quick example text
              </h1>
              <button
                className=" text-gray-300 rounded-xl z-50 bg-black  px-3  top-[90%] right-[10%] absolute animate-pulse
              py-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:opacity-0 
              "
              >
                More info
              </button>
            </div>
            <img
              className="sepia group-hover:sepia-0 -hue-rotate-15 sab z-0 object-fill h-full w-full rounded-2xl "
              //src="https://cdn.shopify.com/s/files/1/0646/5283/7076/products/Gold-Img1_603600a4-6feb-4f50-bff1-f914e6b1cb59.png?v=1662890867"
              src="https://about.powermaccenter.com/wp-content/uploads/2022/09/RX-S1_Smart_1-1-1024x794.png"
              alt=""
            />
          </div>
          <div className="absolute w-full h-[26.5rem]  my-rotate-y-180 backface-hiiden  rounded-2xl">
            <div className="block    w-72 rounded-xl bg-[#111] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat rounbded-t-xl"
                //data-te-ripple-init
                //data-te-ripple-color="light"
              >
                <img
                  className="rounded-t-lg h-full  "
                  src="https://about.powermaccenter.com/wp-content/uploads/2022/09/RX-S1_Smart_1-1-1024x794.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full  overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 rounded-t-xl"></div>
              </div>
              <div className="p-6   backdrop-brightness-50 rounded-b-xl bg-gradient-to-t from-[#111] to-black ">
                <h5 className="mb-2 text-xl font-medium leading-tight  text-purple-400 shadow-2xl  ">
                  Card title
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="text-gray-600 relative rounded-full bg-[#111] w-full py-2 my-3
                  transition-all duration-150  font-bold link animate-puls 
                  bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-0
                  "
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*card 3 */}
      <div className="h-[26.5rem] w-72  bg-transparent cursor-pointer group prespective rounded-2xl ">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="absolute   group w-full h-full backface-hiiden rounded-xl ">
            <div className="absolute w-full h-full  text-[#111] py-32 flex flex-col items-center  bottom-0 left-0 z-50 rounded-2xl">
              <h1 className="  uppercase text-[12px] font-extrabold px-2  ">
                Some quick example text to build on
              </h1>
              <h1 className="  uppercase text-[12px] font-bold px-2  py-6">
                Some quick example text
              </h1>
              <button
                className=" text-gray-300 rounded-xl z-50  bg-black py-1 px-3  top-[90%] right-[10%] absolute animate-pulse
               bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:opacity-0 
              "
              >
                More info
              </button>
            </div>
            <img
              className=" sepia group-hover:sepia-0  -hue-rotate-15 object-fill h-full w-full rounded-2xl "
              src="https://about.powermaccenter.com/wp-content/uploads/2022/09/RX-S1_Smart_1-1-1024x794.png"
              alt=""
            />
          </div>
          <div className="absolute w-full h-[26.5rem] my-rotate-y-180 backface-hiiden  rounded-2xl">
            <div className="block    w-72 rounded-xl bg-[#111] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
              <div
                className="relative overflow-hidden bg-cover bg-no-repeat rounbded-t-xl"
                //data-te-ripple-init
                //data-te-ripple-color="light"
              >
                <img
                  className="rounded-t-lg h-full z-0 "
                  src="https://about.powermaccenter.com/wp-content/uploads/2022/09/RX-S1_Smart_1-1-1024x794.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full  overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 rounded-t-xl"></div>
              </div>
              <div className="p-6   backdrop-brightness-50 rounded-b-xl bg-gradient-to-t from-[#111] to-black ">
                <h5 className="mb-2 text-xl font-medium leading-tight  text-purple-400 shadow-2xl  ">
                  Card title
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button
                  className="text-gray-600 relative rounded-full bg-[#111] w-full py-2 my-3
                  transition-all duration-150  font-bold link animate-puls 
                  bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-0
                  "
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
