import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToProducts = () => {
    const productsSection = document.getElementById("productsSection"); // Assuming you have an element with id 'productsSection'
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer>
      <div className="grid sm:grid-cols-4 gird-cols-1 gap-5 justify-items-center p-16">
        <div className=" flex flex-col justify-center items-center md:gap-16 gap-4">
          <img src="/logo.svg" alt="" />
          <p className=" ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            molestiae, quidem sed sit sapiente cumque laudantium sequi iusto
            tenetur tempore.
          </p>
          <div className="flex justify-center items-center gap-8">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaLinkedinIn />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[22px] font-semibold">Catalog</h1>
          <Link to="/">Necklaces</Link>
          <Link onClick={scrollToProducts} to="/">
            Bag
          </Link>
          <Link onClick={scrollToProducts} to="/">
            Hoodies
          </Link>
          <Link onClick={scrollToProducts} to="/">
            Jewelry Box
          </Link>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="text-[22px] font-semibold">About Us</li>
          <li>Our Producers</li>
          <li>Sitemap</li>
          <li>FAQ</li>
          <li>About Us</li>
          <li>Terms & Conditions</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="text-[22px] font-semibold">Customer Services</li>
          <li>Contact Us</li>
          <li>Track Your Order</li>
          <li>Product Care & Repair</li>
          <li>Book an Appointment</li>
          <li>Shipping & Returns</li>
        </ul>
      </div>
      <div className=" flex justify-between bg-[#1E2832] py-2 px-36">
        <h1>© 2024 Coral , Inc.</h1>
        <img src="/icons_payment 1.svg" alt="" />
        <button onClick={scrollToTop}>Scroll to top🔝</button>
      </div>
    </footer>
  );
}
