"use client";

import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { usePathname } from "next/navigation";

import HomeNavbar from "./HomeNavbar";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const isHomePage = pathname === "/home" || pathname === "/";

  console.log(isHomePage);
  return (
    <>
      {!isHomePage ? (
        <header className=" sticky left-0 top-0 w-full">
          <nav className="max-w-full m-auto  flex justify-between items-center p-4 xl:px-24  text-white bg-sky-600">
            <h1 className="text-4xl font-bold cursor-pointer">HomeDecor</h1>

            <ul className="hidden lg:flex justify-center">
              <li className="p-6 hover:text-zinc-400">
                <Link href="/products">Products</Link>
              </li>
              <li className="p-6 hover:text-zinc-400">
                <Link href="/home">Home</Link>
              </li>
              <li className="p-6 hover:text-zinc-400">
                <Link href="/sales">Sales</Link>
              </li>
              <li className="p-6 hover:text-zinc-400">
                <Link href="/news">News</Link>
              </li>
              <li className="p-6 hover:text-zinc-400">
                <Link href="/about">Contact</Link>
              </li>
            </ul>
            <div className="hidden lg:flex justify-center">
              <Link href="/login" className="p-4 hover:text-zinc-400">
                Login
              </Link>
              <Link href="/register" className="p-4 hover:text-zinc-400">
                Register
              </Link>
            </div>

            <div onClick={handleNav} className="block lg:hidden z-10">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Menu */}
            <div
              className={
                nav
                  ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-sky-600 text-center ease-in duration-300"
                  : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-sky-600 text-center ease-in duration-300"
              }
            >
              <ul>
                <li
                  onClick={handleNav}
                  className="p-4 text-4xl hover:text-gray-500"
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-4 text-4xl hover:text-gray-500"
                >
                  <Link href="/#gallery">Gallery</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-4 text-4xl hover:text-gray-500"
                >
                  <Link href="/work">Work</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="p-4 text-4xl hover:text-gray-500"
                >
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      ) : (
        <HomeNavbar />
      )}
    </>
  );
};

export default Navbar;
