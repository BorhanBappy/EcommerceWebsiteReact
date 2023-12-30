import React from "react";

function Newsletters() {
  return (
    <div className="max-w-screen-2xl container mx-auto mt-[-64px] bg-primayBG xl:px-28 px-4 py-16">
      <h2 className="text-xl sm:text-3xl font-semibold capitalize text-center my-8">
        Follow products and discounts on Instagram
      </h2>
      {/* Insta Gird */}
      <div className="flex flex-wrap gap-4 items-center justify-center mt-20">
        <img src="/images/instagram/img1.png" alt="" />
        <img src="/images/instagram/img2.png" alt="" />
        <img src="/images/instagram/img3.png" alt="" />
        <img src="/images/instagram/img4.png" alt="" />
        <img src="/images/instagram/img5.png" alt="" />
      </div>
      {/* Newsletter */}
      <div className="">
        <h2 className="text-xl sm:text-3xl font-semibold capitalize text-center my-8">
          or subscribe the Newsletters
        </h2>
        <form className="max-w-md mx-auto p-6 shadow-md rounded-md flex items-center">
  <input
    type="email"
    id="email"
    name="email"
    className="w-full border rounded-l-md px-3 py-2 focus:outline-none focus:border-blue-500"
    placeholder="Enter your email"
    required
  />
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:shadow-outline-blue"
  >
    Submit
  </button>
</form>

      </div>
    </div>
  );
}

export default Newsletters;
