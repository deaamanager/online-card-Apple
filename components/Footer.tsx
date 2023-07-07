"use client";

function Footer() {
  return (
    <div className="flex lg:flex-row flex-col  items-center justify-center gap-5 my-24  py-4">
      <img
        className=" object-contain sepia h-[4.6rem] lg:h-full md:w-[20%] w-[50%]  "
        src="https://static.vecteezy.com/system/resources/previews/012/871/374/non_2x/app-store-download-button-in-white-colors-download-on-the-apple-app-store-free-png.png"
        //src="https://static2.o9.de/resource/blob/964602/0e380d89887af28ca1352a0c35b787ce/bss-footer-mein-o2-app-ios-teaser-bild-data.png"
        alt=""
      />
      <img
        className=" object-contain sepia h-[4.6rem] lg:h-full md:w-[20%] w-[50%] "
        src="https://static.vecteezy.com/system/resources/previews/012/871/364/original/google-play-store-download-button-in-white-colors-download-on-the-google-play-store-free-png.png"
        //src="https://www.pngall.com/wp-content/uploads/10/Google-Play-Logo-PNG-Cutout.png"
        //src="https://static2.o9.de/resource/blob/964606/53991df129e364a91f604cfb5d62bf62/bss-footer-mein-o2-app-android-teaser-bild-data.png"
        alt=""
      />
    </div>
  );
}

export default Footer;
