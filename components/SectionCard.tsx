"use client";

function SectionCard() {
  return (
    <div className="h-[75vh] relative  w-full -bottom-[10rem] left-0 bg-green-500. rounded-2xl flex flex-col items-center  ">
      <div className="h-full lg:w-[80%] w-[94%] bg-red-500. backdrop-blur backdrop-brightness-200 sepia rounded-2xl flex flex-col justify-center items-center ">
        <div className="h-[23rem] w-[80%] bg-gray-500/80 rounded-xl mt-10  ">
          <img
            src="https://www.designinfo.in/wp-content/uploads/2023/01/Iphone-14-pro1-optimized.jpg"
            alt=""
            className=" w-full h-full object-fill rounded-xl"
          />
        </div>
        <div className="h-[23rem] w-[80%] gap-6 g rounded-xl mt-10 pb-5  flex flex-col md:flex-row items-center  ">
          <div className="h-full md:w-[50%] w-full  bg-gray-500/80 rounded-xl ">
            deaa
          </div>
          <div className="h-full md:w-[50%] w-full bg-gray-500/80 rounded-xl ">
            deaa
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionCard;
