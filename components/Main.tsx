"use ckient";
import Image from "next/image";
function Main() {
  return (
    <div className="w-full relative h-[20rem] mb-[8rem]  lg:mb-[16rem]  mt-24 bg-red-500. flex items-center justify-center">
      <div className="flex flex-col bg-green-500. w-[80%] gap-y-4 items-center justify-center ">
        <h1 className=" z-50  animate-pulse uppercase text-lg font-blod bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600  bg-clip-text font-bold  text-transparent ">
          iPhone 14 Pro Max
        </h1>
        <h1 className="z-50 text-[2rem] lg:text-[2.5rem] font-[700] text-gray-400/60  font-sans">
          Das Pro Plus Ultra.
        </h1>
        <h1 className="z-50 text-[0.8rem] lg:text-[1.3rem]  text-gray-400/90  font-sans">
          Ab 54,12 €/Monat oder 1.299 € vor Inzahlungnahme
        </h1>
        <div className=" z-50 bg-red-500. text-gray-500 flex flex-col lg:flex-row  gap-y-8 gap-x-20">
          <button
            className="text-gray-300 font-bold px-4 lg:px-6 bg-purple-800   border-none relative rounded-lg animate-pulse lg:animate-none lg:hover:animate-pulse
           py-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)] before:opacity-10
          "
          >
            Kaufen
          </button>
          <button
            className=" rounded-lg text-gray-300 backdrop-blur-sm px-4 font-bold  relative
           py-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)] before:block before:contents-['']  before:absolute before:left-[8px] before:right-[8px] before:top-[5px] before:h-[10px] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]   before:opacity-10
          "
          >
            Weitere Infos
          </button>
        </div>
        <img
          src="https://media.mdm.freenetmobile.de/cdn?name=iphone-14-pro-max-128-gb-space-black-linke-seite&version=00ea2cb6583a6a1fcd92bde9db9d2e72487526ac&subType=png&width=390&height=520"
          alt=""
          className=" z-0 absolute object-cover w-[90%]  top-[7rem] lg:top-[2.5rem] md:w-[45%]  mb-24  mix-blend-hard-light "
        />
        <div className="absolute  w-[90%]  h-full top-[9.5rem] md:top-[14rem] lg:top-[12.1rem] xl:top-[19.3rem] md:w-[45%]  mb-24   bg-gradient-to-t from-black via-black/50 z-20  rounded-2xl opacity-95 imageEffect " />
      </div>
    </div>
  );
}

export default Main;
