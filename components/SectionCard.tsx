"use client";

function SectionCard() {
  return (
    <div className="h-[95vh] relative  w-full -bottom-[13rem] left-0 bg-green-500. rounded-2xl flex flex-col items-center my-24  ">
      <div className="h-full lg:w-[80%] w-[94%] bg-red-500. backdrop-blur backdrop-brightness-200  rounded-2xl flex flex-col justify-center items-center ">
        <div className="h-[23rem] w-[80%]  rounded-xl mt-10  ">
          <img
            //src="https://www.gottabemobile.com/3-reasons-to-pre-order-iphone-14-4-reasons-to-wait/iphone-14-pro-max/"
            src="https://www.designinfo.in/wp-content/uploads/2023/01/Iphone-14-pro1-optimized.jpg"
            alt=""
            className=" w-full h-full object-fill rounded-xl"
          />
        </div>
        <div className="h-[35rem] w-[80%] gap-6 rounded-xl mt-10 pb-5 flex flex-col md:flex-row items-center">
          <div className="h-full md:w-[50%] w-full   rounded-xl relative overflow-hidden bg-[#000000] ">
            <h1 className="absolute left-[11%] flex gap-x-2  uppercase pt-1 md:pt-2 pl-10 z-40   text-lg font-blod  ">
              <span className="bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600  bg-clip-text md:font-bold  text-transparent">
                Iphone 14 pro max
              </span>
              <span className="cursor-pointer animate-pulse text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </h1>

            <img
              className="absolute -bottom-4 w-full h-full rounded-xl object-cover z-0"
              src="https://www.gottabemobile.com/3-reasons-to-pre-order-iphone-14-4-reasons-to-wait/iphone-14-pro-max/"
              alt=""
              //src="https://www.apple.com/v/iphone-14-pro/h/images/key-features/features/chip/chip_deep_purple__bs3dtgitlt6q_small.jpg"
            />
          </div>
          <div className="h-full md:w-[50%] w-full bg-[#000000] rounded-xl flex flex-row relative overflow-hidden  ">
            <div className="flex flex-col   text-gray-300  py-4 md:py-24 pl-6 ">
              <h1 className="md:text-md font-bold ">iphone 14 pro max</h1>
              <h3 className="">Lorem ipsum dolor sit amet.</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="w-full h-full ">
              <img
                src="https://mobico.nl/wp-content/uploads/2019/11/refurbished-iphone-11-128gb-paars-voorkant.png"
                alt=""
                className="    object-contain absolute top-8 -right-36"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
