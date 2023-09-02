"use client";
import Link from "next/link";
import { useRef } from "react";

import LinkedinSVG from "../assets/FooterIcons/Linkedin";
import TwitterSVG from "../assets/FooterIcons/Twitter";
import FacebookSVG from "../assets/FooterIcons/Facebook";
import InstagramSVG from "../assets/FooterIcons/Instagram";

const Footer = () => {
  const EmailinputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = EmailinputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
  };

  return (
    <footer className="flex justify-around flex-col text-white bg-sky-700 font-nunito">
      <div className="flex flex-row justify-around p-4 lg:p-16">
        <div className="hidden lg:flex flex-col w-96">
          <h1 className="text-bold text-4xl pb-2">About us</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tempus, est tincidunt venenatis luctus, lacus sem volutpat arcu, at
            viverra dolor ipsum in mauris. Cras non neque nulla. Sed vitae erat
            neque.
          </p>
        </div>
        <div className=" flex flex-col ">
          <h2 className="text-bold text-xl  mb-2 border-b-2 lg:text-2xl">
            Quick Links
          </h2>
          <Link
            href="/home"
            className="text-center font-light text-sm lg:text-lg hover:text-zinc-400 hover:underline"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-center font-light text-sm lg:text-lg hover:text-zinc-400 hover:underline"
          >
            Products
          </Link>

          <Link
            href="/sales"
            className="text-center font-light text-sm lg:text-lg hover:text-zinc-400 hover:underline"
          >
            Sales
          </Link>
          <Link
            href="/news"
            className="text-center font-light text-sm lg:text-lg hover:text-zinc-400 hover:underline"
          >
            News
          </Link>
          <Link
            href="/contact"
            className="text-center font-light text-sm lg:text-lg hover:text-zinc-400 hover:underline"
          >
            Contact
          </Link>
        </div>
        <div className=" flex flex-col text-center">
          <h2 className="text-bold text-xl  mb-2 border-b-2 lg:text-2xl">
            Contact Info
          </h2>
          <p className="text-center font-light text-sm lg:text-base">
            London 88220
          </p>
          <p className="font-light text-sm lg:text-base">+123 456789</p>
          <p className="font-light text-sm lg:text-base">+987 654321</p>
          <p className="font-light text-sm lg:text-base">info@ecommerce.com</p>
          <p className="font-light text-sm lg:text-base">
            ecommerce@decore.com
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center  bg-sky-950 w-full">
        <div className="flex flex-col justify-center pt-2">
          <label htmlFor="email" className="text-center pb-2">
            Newsletter Subscription
          </label>
          <div className="flex">
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              ref={EmailinputRef}
              className="h-8 w-44 p-2 border rounded-l text-sm text-sky-700 sm:h-10 sm:w-64 sm:text-base focus:outline-none focus:border-sky-700"
            />
            <button className="h-8 p-1 text-sm sm:text-base bg-sky-700  rounded-r sm:h-10 sm:p-2">
              Subscribe
            </button>
          </div>
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
