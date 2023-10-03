import Link from "next/link";

import {
  AllMobile,
  FurnitureMobile,
  OutdoorMobile,
  LightingMobile,
  DecorMobile,
  WallDecorMobile,
  BathMobile,
  KitchenMobile,
} from "../assets/ProductsNavIcons/MobileIcons";

const MobileProducstNavbar = () => {
  return (
    <>
      <ul className="flex justify-center mx-2 flex-wrap gap-4 text-center">
        <li className="w-[120px] h-[120px] rounded-full bg-gray-300 px-6 py-6 flex justify-center">
          <Link href="/products">
            <div className="flex justify-center pb-2">
              <AllMobile />
            </div>{" "}
            All
          </Link>
        </li>
        <li className="w-[120px] h-[120px] rounded-full bg-gray-300 px-6 py-4 flex justify-center">
          <Link href="/products/furniture">
            <div className="flex justify-center pb-2">
              <FurnitureMobile />{" "}
            </div>
            Furniture
          </Link>
        </li>
        <li className="w-[120px] h-[120px] rounded-full bg-gray-300 px-6 py-4 flex justify-center">
          <Link href="/products/bath">
            <div className="flex justify-center  pb-2">
              <BathMobile />{" "}
            </div>
            Bath
          </Link>
        </li>
        <li className="w-[120px] h-[120px] rounded-full bg-gray-300 px-6 py-4 flex justify-center">
          <Link href="/products/kitchen">
            <div className="flex justify-center pb-2">
              <KitchenMobile />{" "}
            </div>
            Kitchen
          </Link>
        </li>
        <li className="w-[120px] h-[120px] rounded-full bg-gray-300 px-6 py-4 flex justify-center">
          <Link href="/products/outdoors">
            <div className="flex justify-center pb-2">
              <OutdoorMobile />{" "}
            </div>
            Outdoors
          </Link>
        </li>
        <li className="w-[120px] h-[120px] rounded-full bg-gray-300 px-6 py-4 flex justify-center">
          <Link href="/products/lighting">
            <div className="flex justify-center pb-2">
              <LightingMobile />{" "}
            </div>
            Lighting
          </Link>
        </li>
        <li className="w-[120px] h-[120px] rounded-full bg-gray-300 px-6 py-4 flex justify-center">
          <Link href="/products/decor">
            <div className="flex justify-center pb-2">
              <DecorMobile />{" "}
            </div>
            Decor
          </Link>
        </li>
        <li className="w-[120px] h-[120px] rounded-full bg-gray-300 px-6 py-4 flex justify-center">
          <Link href="/products/walldecor">
            <div className="flex justify-center pb-2">
              <WallDecorMobile />{" "}
            </div>
            Walls
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MobileProducstNavbar;
