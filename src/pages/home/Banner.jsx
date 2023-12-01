import React from "react";
import { FaShoppingBag } from "react-icons/fa";
function Banner() {
  return (
    <div className=" bg-primayBG py-12 lg:px-28 px-4" >
      <div className=" py-28 flex flex-col md:flex-row-reverse justify-between gap-14">
        <div className=" md:w-1/2">
          <h1 className=" text-5xl font-light mb-5">Collection</h1>
          <p className=" text-xl mb-7">
            you can shop and explore different collection various brands here
          </p>
          <button className=" bg-black hover:bg-orange-500 text-white font-semibold rounded-md px-6 py-2 flex items-center gap-2"> <FaShoppingBag/> Shop Now</button>
        </div>
        <div className="md:w-1/2">
          <img src="/images/banner.png" alt="Banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
