"use client";

function Footer() {
  return (
    <footer>
      <div className="flex lg:flex-row flex-col  items-center justify-center gap-5 mt-8  py-4">
        <img
          className=" object-contain h-[4.6rem] lg:h-full md:w-[20%] w-[50%]  "
          src="https://static.vecteezy.com/system/resources/previews/012/871/374/non_2x/app-store-download-button-in-white-colors-download-on-the-apple-app-store-free-png.png"
          //src="https://static2.o9.de/resource/blob/964602/0e380d89887af28ca1352a0c35b787ce/bss-footer-mein-o2-app-ios-teaser-bild-data.png"
          alt="Apple-store"
        />
        <img
          className=" object-contain h-[4.6rem] lg:h-full md:w-[20%] w-[50%] "
          src="https://static.vecteezy.com/system/resources/previews/012/871/364/original/google-play-store-download-button-in-white-colors-download-on-the-google-play-store-free-png.png"
          //src="https://www.pngall.com/wp-content/uploads/10/Google-Play-Logo-PNG-Cutout.png"
          //src="https://static2.o9.de/resource/blob/964606/53991df129e364a91f604cfb5d62bf62/bss-footer-mein-o2-app-android-teaser-bild-data.png"
          alt="Google-store"
        />
      </div>
      <hr className="mx-w-3xl  boreder-2 border-indigo-900 my-5 mx-3" />
      <div className="flex items-center justify-center mx-6 ">
        <img
          alt="Bezahl-methode"
          src="https://www.bettdecke.de/wp-content/uploads/2020/11/trust-bottom.png"
          className=" object-cover mix-blend-screen"
        />
      </div>
      <div className="flex items-center justify-center my-3 mx-1 relative rounded-2xl overflow-hidden h-16 ">
        <div className="bg-indigo-900/90  absolute w-full h-[100%]  blur-2xl  " />
        <div className="bg-[#111] relative top-1 w-full h-[90%] flex items-center justify-center">
          <h1> deaa </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
