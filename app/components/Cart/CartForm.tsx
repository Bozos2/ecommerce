import Image from "next/image";

import test from "../../assets/background.jpg";
import QuantityButton from "./QuantityButton";
import GarbageIcon from "@/app/assets/CartIcons/GarbageIcon";

const ImageStyle = {
  borderRadius: "10%",
};

const CartForm = () => {
  return (
    <div>
      <div className="flex gap-4 border-b-2 pb-4">
        <div className="w-3/5 flex">
          <Image src={test} alt="product image" style={ImageStyle} />
        </div>
        <div className="flex flex-col justify-between w-full ">
          <div className="flex flex-col sm:flex-row justify-between flex-nowrap">
            <h2 className="text-base font-semibold sm:text-xl">
              Elegant sofa test title
            </h2>
            <h5 className="font-semibold text-sm sm:text-xl">$399,99</h5>
          </div>
          <div className="flex flex-row font-oswald">
            <span className="text-sm sm:text-base text-gray-500">color:</span>
            <div className="w-[15px] h-[15px] mt-1.5 ml-1 bg-red-600 rounded-full shadow-xl cursor-pointer"></div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <div className="pt-2">
                <GarbageIcon />
              </div>
              <button className="pt-1 pl-1 text-sm sm:text-base text-gray-500">
                Remove
              </button>
            </div>
            <QuantityButton />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-4 text-gray-500">
        <div className="border-b-2 pb-4">
          <div className="flex flex-row justify-between py-0.5">
            <h4>Subtotal</h4>
            <h4>$1,697</h4>
          </div>
          <div className="flex flex-row justify-between py-0.5">
            <h4>Shipping</h4>
            <h4>$18.00</h4>
          </div>
          <div className="flex flex-row justify-between py-0.5">
            <h4>VAT (17%)</h4>
            <h4>$368.99</h4>
          </div>
        </div>
        <div className="flex flex-row justify-between border-b-2 py-4 font-semibold text-xl text-black">
          <h2>Total</h2>
          <h2>$2.999</h2>
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <button className="py-3 px-6 sm:px-8 bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg sm:text-xl tracking-widest">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartForm;
