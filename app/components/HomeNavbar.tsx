"use-client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Avatar from "react-avatar";
import { useSession, signOut } from "next-auth/react";

import HomeSVG from "../assets/NavbarIcons/Home";
import NewsSVG from "../assets/NavbarIcons/News";
import SalesSVG from "../assets/NavbarIcons/Sales";
import ProductsSVG from "../assets/NavbarIcons/Products";
import ContactSVG from "../assets/NavbarIcons/Contact";
import CartSVG from "../assets/NavbarIcons/Cart";
import avatar from "../assets/woman-avatar.jpg";
import Guest from "../assets/Guest.png";

const HomeNavbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [color, setColor] = useState<string>("transparent");
  const { data: session }: any = useSession();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#0369a1");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <header
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 rounded-b-xl font-nunito"
    >
      <nav className="max-w-full m-auto  flex justify-between items-center  p-4   xl:px-24 lg:p-2 text-white">
        <h1 className="text-4xl font-bold cursor-pointer">HomeDecor</h1>

        <ul className="hidden lg:flex justify-center">
          <li className="p-6 hover:text-zinc-400">
            <Link href="/home">Home</Link>
          </li>
          <li className="p-6 hover:text-zinc-400">
            <Link href="/products">Products</Link>
          </li>
          <li className="p-6 hover:text-zinc-400">
            <Link href="/sales">Sales</Link>
          </li>
          <li className="p-6 hover:text-zinc-400">
            <Link href="/news">News</Link>
          </li>
          <li className="p-6 hover:text-zinc-400">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hidden lg:flex justify-center">
          {session ? (
            <div className="flex flex-row">
              <div className="mt-1">
                <Avatar
                  size="40"
                  round="120px"
                  src={avatar.src}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <h4 className="p-3 font-nunito cursor-pointer hover:underline">
                {session?.user?.fullName}
              </h4>
              <button
                onClick={() => signOut()}
                className="px-4  border-2 rounded-2xl ml-6"
              >
                Log out
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="p-4 hover:text-zinc-400">
                Login
              </Link>
              <Link href="/register" className="p-4 hover:text-zinc-400">
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block lg:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-around items-center w-3/4 h-screen bg-sky-700 text-center ease-in duration-300"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-around items-center w-full h-screen bg-sky-700 text-center ease-in duration-300"
          }
        >
          <div>
            {session ? (
              <>
                <Avatar
                  size="110"
                  round="120px"
                  src={avatar.src}
                  style={{ cursor: "pointer" }}
                />
                <h4 className="pt-3">{session?.user?.fullName}</h4>
              </>
            ) : (
              <>
                <Avatar
                  size="110"
                  round="120px"
                  src={Guest.src}
                  style={{ cursor: "pointer" }}
                />
                <h4 className="pt-3">Guest</h4>
              </>
            )}
          </div>
          <ul className="w-11/12">
            <li
              onClick={handleNav}
              className="flex flex-row  gap-16 p-2 text-xl hover:text-zinc-400 border-b-2 border-opacity-30 border-white"
            >
              <HomeSVG />
              <Link href="/" className="mt-1 text-bold">
                Home
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="flex flex-row  gap-16 p-2 text-lg hover:text-zinc-400 border-b-2 border-opacity-30 border-white"
            >
              <ProductsSVG />
              <Link href="/products" className="mt-1 text-bold">
                Products
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="flex flex-row  gap-16 p-2 text-lg hover:text-zinc-400 border-b-2 border-opacity-30 border-white"
            >
              <SalesSVG />
              <Link href="/sales" className="mt-1 text-bold">
                Sales
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="flex flex-row  gap-16 p-2 text-lg hover:text-zinc-400 border-b-2 border-opacity-30 border-white"
            >
              <NewsSVG />
              <Link href="/news" className="mt-1 text-bold">
                News
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="flex flex-row  gap-16 p-2 text-lg hover:text-zinc-400 border-b-2 border-opacity-30 border-white"
            >
              <ContactSVG />
              <Link href="/contact" className="mt-1 text-bold">
                Contact
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="flex flex-row  gap-16 p-2 text-lg hover:text-zinc-400 border-b-2 border-opacity-30 border-white"
            >
              <CartSVG />
              <Link href="/contact" className="mt-1 text-bold">
                Cart
              </Link>
            </li>
          </ul>
          <div className="">
            {session ? (
              <button onClick={() => signOut()} className="hover:text-zinc-400">
                Log out{" "}
              </button>
            ) : (
              <>
                <Link href="/login" className="p-4 hover:text-zinc-400">
                  Login
                </Link>
                <Link href="/register" className="p-4 hover:text-zinc-400">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HomeNavbar;
