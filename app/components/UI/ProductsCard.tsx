"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

import { ProductProps } from "../../types";
import { useCartContext } from "../../context/cart-reducer";

const ProductsCard: React.FC<ProductProps> = (props) => {
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

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.6,
      }}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="flex flex-wrap justify-center m-5 xl:m-6"
    >
      <div className="flex flex-col  font-nunito min-w-[240px] w-[380px]  h-[510px]  mx-2 shadow-xl bg-slate-200 rounded-xl cursor-pointer transition ease-in duration-500 hover:-translate-y-0.5  hover:scale-110">
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
        <div className="my-2 mx-4">
          <h4 className="text-sky-700 font-bold text-xl">{props.category}</h4>
          <p className="text-sm font-normal">{props.subcategory}</p>
          <h1 className="mt-2 text-2xl font-black">{props.title}</h1>
          <div
            onClick={(e) => e.preventDefault()}
            className="flex justify-center gap-2 mt-2"
          >
            {colorDivs}
          </div>
          <h2 className="mt-2 font-bold text-2xl">{props.price}$</h2>
          <div className="flex justify-end" onClick={(e) => e.preventDefault()}>
            <button
              onClick={() => {
                addToCarthandler();
                toast({
                  description: "Successfully added product to cart!",
                });
              }}
              className="bg-sky-600 py-2 px-14 mt-6 rounded-xl text-white font-bold hover:border-2 hover:border-sky-600 hover:bg-slate-200 hover:text-sky-600 transition ease-in  duration-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsCard;
