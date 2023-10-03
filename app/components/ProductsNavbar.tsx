"use client";

import Link from "next/link";

import useCategoryState from "../hooks/useCategoryState";
import RightArrow from "../assets/Arrows/RightArrow";
import MobileProducstNavbar from "./MobileProductsNavbar";

import {
  AllIcon,
  BathIcon,
  DecorIcon,
  FurnitureIcon,
  KitchenIcon,
  LightingIcon,
  OutdoorsIcon,
  WallDecorIcon,
} from "../assets/ProductsNavIcons/DesktopIcons";

const ProductsNavbar = () => {
  const { categoryState, toggleCategory } = useCategoryState();

  const showFurnitureSubcategory = categoryState.furniture;
  const showKitchenSubcategory = categoryState.kitchen;
  const showBathSubcategory = categoryState.bath;
  const showOutdoorsSubcategory = categoryState.outdoors;
  const showLightingSubcategory = categoryState.lighting;
  const showDecorSubcategory = categoryState.decor;
  const showWallsSubcategory = categoryState.walls;

  const toggleFurnitureSubcategory = () => toggleCategory("furniture");
  const toggleKitchenSubcategory = () => toggleCategory("kitchen");
  const toggleBathSubcategory = () => toggleCategory("bath");
  const toggleOutdoorsSubcategory = () => toggleCategory("outdoors");
  const toggleLightingSubcategory = () => toggleCategory("lighting");
  const toggleDecorSubcategory = () => toggleCategory("decor");
  const toggleWallsSubcategory = () => toggleCategory("walls");

  return (
    <>
      <nav className="flex justify-center  my-10 font-oswald xl:hidden">
        <MobileProducstNavbar />
      </nav>
      <nav className="hidden xl:flex sticky top-36 my-20  font-nunito w-[420px] h-[416px]">
        <ul className="border-2 rounded-xl border-sky-700 divide-y-2 divide-solid divide-sky-700 font-bold">
          <li className="py-2 pr-36 pl-3">
            <Link href="/products" className="flex flex-row items-center gap-8">
              <AllIcon /> All
            </Link>
          </li>
          <li className="py-2 pl-3 flex flex-row justify-between">
            <Link
              href="/products/furniture"
              className="flex flex-row items-center gap-8"
            >
              <FurnitureIcon /> Furniture
            </Link>
            <div
              className="cursor-pointer"
              onClick={toggleFurnitureSubcategory}
            >
              <RightArrow />
            </div>
          </li>

          <li className="py-2 pl-3 flex flex-row justify-between">
            <Link
              href="/products/bath"
              className="flex flex-row items-center gap-8"
            >
              <BathIcon /> Bath
            </Link>
            <div className="cursor-pointer" onClick={toggleBathSubcategory}>
              <RightArrow />
            </div>
          </li>
          <li className="py-2 pl-3 flex flex-row justify-between">
            <Link
              href="/products/kitchen"
              className="flex flex-row items-center gap-8"
            >
              <KitchenIcon /> Kitchen
            </Link>
            <div className="cursor-pointer" onClick={toggleKitchenSubcategory}>
              <RightArrow />
            </div>
          </li>
          <li className="py-2 pl-3 flex flex-row justify-between">
            <Link
              href="/products/outdoors"
              className="flex flex-row items-center gap-8"
            >
              <OutdoorsIcon /> Outdoors
            </Link>
            <div className="cursor-pointer" onClick={toggleOutdoorsSubcategory}>
              <RightArrow />
            </div>
          </li>
          <li className="py-2 pl-3 flex flex-row justify-between">
            <Link
              href="/products/lighting"
              className="flex flex-row items-center gap-8"
            >
              <LightingIcon /> Lighting
            </Link>
            <div className="cursor-pointer" onClick={toggleLightingSubcategory}>
              <RightArrow />
            </div>
          </li>
          <li className="py-2 pl-3 flex flex-row justify-between">
            <Link
              href="/products/decor"
              className="flex flex-row items-center gap-8"
            >
              <DecorIcon /> Decor
            </Link>
            <div className="cursor-pointer" onClick={toggleDecorSubcategory}>
              <RightArrow />
            </div>
          </li>
          <li className="py-2 pl-3 flex flex-row justify-between">
            <Link
              href="/products/walldecor"
              className="flex flex-row items-center gap-8"
            >
              <WallDecorIcon /> Walls
            </Link>
            <div className="cursor-pointer" onClick={toggleWallsSubcategory}>
              <RightArrow />
            </div>
          </li>
        </ul>
        <ul>
          {showFurnitureSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[52px] rounded-r-xl rounded-bl-xl border-sky-700 py-2 pl-4 pr-12 font-semibold">
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/sofas">Sofas</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/coffe-tables">
                  Coffee Tables
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/tvstands">Tv Stands</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/poufsottomans">
                  Poufs & Ottomans
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/bookcases">Bookcases</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/beds">Beds</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/nightstands">Nightstands</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/diningsets">Dining Sets</Link>
              </li>
            </ul>
          )}
          {showBathSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[104px] rounded-r-xl border-sky-700 py-2 pl-4 pr-12 font-semibold">
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/bathtowels">Bath Towels</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/bathvanities">
                  Bath Vanities
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/tubs">Tubs</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/showers">Showers</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/toilets">Toilets</Link>
              </li>
            </ul>
          )}
          {showKitchenSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[52px] rounded-r-xl border-sky-700 py-2 pl-4 pr-5 font-semibold">
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/diningbowls">Dining Bowls</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/flatwaresets">
                  Flatware Sets
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/dinnerwaresets">
                  Dinnerware Sets
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/winechampagneglasses">
                  Wine & Champagne glasses
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/drinkingglasses">
                  Drinking Glasses
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/mugsteacups">
                  Mugs & Teacups
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/coffemakers">Coffe Makers</Link>
              </li>
            </ul>
          )}
          {showOutdoorsSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[156px] rounded-r-xl border-sky-700 py-2 pl-4 pr-12 font-semibold">
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/furnituresets">
                  Furniture Sets
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/lanterns">Lanterns</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/planters">Planters</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/doormats">Doormats</Link>
              </li>
            </ul>
          )}
          {showLightingSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[260px] rounded-r-xl border-sky-700 py-2 pl-4 pr-12 font-semibold">
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/ceilinglights">
                  Ceiling Lights
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/tablelamps">Table Lamps</Link>
              </li>
            </ul>
          )}
          {showDecorSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[98px] rounded-r-xl border-sky-700 py-2 pl-4 pr-12 font-semibold">
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/basketsboxes">
                  Baskets & Boxes
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/vases">Vases</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/planters">Planters</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/pictureframes">
                  Picture Frames
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/pillows">Pillows</Link>
              </li>
            </ul>
          )}
          {showWallsSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[266px] rounded-r-xl border-sky-700 py-2 pl-4 pr-12 font-semibold">
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/wallart">Wall art</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/clocks">Clocks</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/furniture/mirrors">Mirrors</Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </>
  );
};

export default ProductsNavbar;
