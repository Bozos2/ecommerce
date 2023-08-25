"use client";
import Link from "next/link";

import LinkedinSVG from "../assets/FooterIcons/Linkedin";
import TwitterSVG from "../assets/FooterIcons/Twitter";
import FacebookSVG from "../assets/FooterIcons/Facebook";
import InstagramSVG from "../assets/FooterIcons/Instagram";

const Footer = () => {
  return (
    <footer className="flex justify-around flex-col text-white bg-sky-700">
      <div className="flex flex-row justify-around p-4 lg:p-16">
        <div className="hidden lg:flex flex-col w-96">
          <h1 className="text-bold text-4xl pb-2">About us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tempus, est tincidunt venenatis luctus, lacus sem volutpat arcu, at
            viverra dolor ipsum in mauris. Cras non neque nulla. Sed vitae erat
            neque.
          </p>
        </div>
        <div className=" flex flex-col ">
          <h2 className="text-bold text-xl pb-1 lg:text-2xl">Quick Links</h2>
          <Link
            href="/products"
            className="text-center font-light text-sm lg:text-lg hover:text-zinc-400 hover:underline"
          >
            Products
          </Link>
          <Link
            href="/home"
            className="text-center font-light text-sm lg:text-lg hover:text-zinc-400 hover:underline"
          >
            Home
          </Link>
          <Link
            href="/sales"
            className="text-center font-light text-sm lg:text-lg hover:text-zinc-400 hover:underline"
          >
            Sales
          </Link>
          <Link
            href="/about"
            className="text-center font-light text-sm lg:text-lg hover:text-zinc-400 hover:underline"
          >
            News
          </Link>
          <Link
            href="/about"
            className="text-center font-light text-sm lg:text-lg hover:text-zinc-400 hover:underline"
          >
            Contact
          </Link>
        </div>
        <div className=" flex flex-col text-center">
          <h2 className="text-bold text-xl pb-1 lg:text-2xl">Contact Info</h2>
          <p className="text-center font-light text-sm">London 88220</p>
          <p className="font-light text-sm">+123 456789</p>
          <p className="font-light text-sm">+987 654321</p>
          <p className="font-light text-sm">info@ecommerce.com</p>
          <p className="font-light text-sm">ecommerce@decore.com</p>
        </div>
      </div>
      <div className="flex flex-col items-center  bg-sky-950 w-full">
        <div className=" pt-2">
          <h2>Newsletter Subscription</h2>
        </div>
        <div className="flex flex-row gap-2 py-4 hover:cursor-pointer">
          <LinkedinSVG />
          <TwitterSVG />
          <FacebookSVG />
          <InstagramSVG />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
