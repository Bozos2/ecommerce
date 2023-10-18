"use client";

import Image from "next/image";
import { useState } from "react";

import { ProductProps } from "@/app/types";
import { useCartContext } from "../../context/cart-reducer";
import DetailCards from "./DetailCards";

const DetailWrapper: React.FC<ProductProps> = (props) => {
  const [selectedColor, setSelectedColor] = useState(props.colors[0]);
  const cartCtx = useCartContext();
  const addToCarthandler = () => {
    cartCtx.addItem({
      id: props.id,
      src: props.src,
      title: props.title,
      color: selectedColor,
      price: props.price,
      amount: 1,
    });
  };

  const colorDivs = props.colors.map((color: string, index: number) => (
    <div
      key={index}
      style={{ backgroundColor: color }}
      className="w-[30px] h-[30px] rounded-full shadow-xl cursor-pointer focus:outline focus:outline-sky-600 focus:outline-offset-2"
      tabIndex={0}
      onClick={() => setSelectedColor(color)}
    ></div>
  ));

  return (
    <div className="flex flex-col mt-4 items-center lg:items-start justify-center 2xl:justify-start  lg:flex-row min-w-[240px] w-[1280px]  min-h-[380px] h-[1000px] sm:h-[800px]  lg:h-[600px] font-nunito">
      <div className="relative  w-full lg:w-3/5 h-3/6  lg:h-full shadow-2xl">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src={props.src}
          alt="Product picture"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="lg:px-16 w-full sm:w-3/5 lg:w-2/5">
        <h4 className="text-sky-600 text-lg mb-3 sm:mb-6 mt-2 lg:mt-0">
          {props.category} / {props.subcategory}
        </h4>
        <h1 className="font-bold text-2xl sm:text-3xl mb-3">{props.title}</h1>
        <h3 className="font-medium lg:mt-16">Colors available: </h3>
        <div className="flex  gap-2 mt-1 sm:mt-2">{colorDivs}</div>
        <p className="text-sky-600 text-lg font-semibold mt-2 lg:mb-6 lg:mt-12 hover:underline hover:underline-offset-2 hover:cursor-pointer">
          ${props.price}
        </p>
        <button
          onClick={() => {
            addToCarthandler();
          }}
          className="bg-gradient-to-r from-sky-500 to-indigo-500 py-3  mt-2 lg:mt-6  w-full text-white font-black tracking-widest"
        >
          ADD TO CART
        </button>
        <div className="mt-12">
          <DetailCards />
        </div>
      </div>
    </div>
  );
};

export default DetailWrapper;
