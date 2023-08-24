"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-blue-400 ">
      <Link href="/products">Products</Link>
      <Link href="/home">Home</Link>
      <Link href="/sales">Sales</Link>
      <Link href="/about">News</Link>
      <Link href="/about">Contact</Link>
    </div>
  );
};

export default Footer;
