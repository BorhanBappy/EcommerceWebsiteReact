import React from "react";

const Collection = () => {
  return (
    <div className='bg-[url("/images/collection-bg.png")] bg-center bg-cover bg-no-repeat lg:px-28 px-4 py-4 '>
      <div className="h-[580px] flex flex-col justify-between md:flex-row item-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src="/images/zara-logo.png" alt="" />
          <p className="text-white text-lg capitalize my-8 md:2/3 leading-8 ">
            Lustrous yet understated, the new evening collection exudes an air
            of elegance and sophistication. Each piece is meticulously crafted
            to capture the essence of timeless beauty, embracing a perfect
            balance between opulence and subtlety
          </p>
          <button className=" bg-white text-black px-6 py-2 rounded-sm font-semibold">See Collection</button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
