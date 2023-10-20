"use client";

import Image from "next/image";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

import { SaleProduct } from "@/app/types";
import { useCartContext } from "../../context/cart-reducer";

const SalesCard: React.FC<SaleProduct> = (props) => {
  const [selectedColor, setSelectedColor] = useState(props.colors[0]);
  const { toast } = useToast();
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

  const colorDivs = props.colors.map((color, index) => (
    <div
      key={index}
      style={{ backgroundColor: color }}
      className="w-[30px] h-[30px] rounded-full shadow-xl cursor-pointer focus:outline focus:outline-sky-600 focus:outline-offset-2"
      tabIndex={0}
      onClick={() => setSelectedColor(color)}
    ></div>
  ));
  return (
    <div className="flex flex-wrap justify-center m-5 xl:m-6">
      <div className="relative flex flex-col  font-nunito min-w-[240px] w-[380px]  h-[510px]  mx-2 shadow-xl bg-slate-200 rounded-xl cursor-pointer transition ease-in duration-500 hover:-translate-y-0.5  hover:scale-110">
        <div className="relative h-2/4">
          <Image
            fill
            style={{ objectFit: "cover", borderRadius: "3%" }}
            src={props.src}
            alt="Product picture"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="absolute  w-16 h-7 left-44 sm:left-64  bg-sky-600 rounded-b-lg z-10 text-center pt-1 text-semibold text-white">
          {props.percentage}%
        </div>
        <div className="my-2 mx-4">
          <h4 className="text-sky-700 font-bold text-xl">{props.category}</h4>
          <p className="text-sm font-normal">{props.subcategory}</p>
          <h1 className="mt-2 text-2xl font-black">{props.title}</h1>
          <div className="flex justify-center gap-2 mt-2">{colorDivs}</div>
          <div className="flex flex-row mt-2">
            <h2 className="mt-2 font-bold text-2xl">{props.price}$</h2>
            <h2 className="mt-2 font-semibold text-xl text-red-600 ml-4 line-through decoration-2">
              {props.oldprice}$
            </h2>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => {
                addToCarthandler();
                toast({
                  description: "Successfully added product to cart!",
                });
              }}
              className="bg-sky-600 py-2 px-14 mt-4 rounded-xl text-white font-bold hover:border-2 hover:border-sky-600 hover:bg-slate-200 hover:text-sky-600 transition ease-in  duration-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
