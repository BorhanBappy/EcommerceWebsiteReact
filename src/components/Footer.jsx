import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Footer() {
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
        <div>Catalog</div>
        <li></li>
        <div>About Us</div>
        <div>Customer Services</div>
      </div>
    </footer>
  );
}
