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
              href="/products/outdoor"
              className="flex flex-row items-center gap-8"
            >
              <OutdoorsIcon /> Outdoor
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
              href={`/products/${encodeURIComponent("Wall Decor")}`}
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
                <Link
                  href={`/products/furniture/${encodeURIComponent(
                    "coffee tables"
                  )}`}
                >
                  Coffee Tables
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/furniture/${encodeURIComponent(
                    "tv stands"
                  )}`}
                >
                  Tv Stands
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/furniture/${encodeURIComponent(
                    "poufs & ottomans"
                  )}`}
                >
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
                <Link
                  href={`/products/furniture/${encodeURIComponent(
                    "dining sets"
                  )}`}
                >
                  Dining Sets
                </Link>
              </li>
            </ul>
          )}
          {showBathSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[104px] rounded-r-xl border-sky-700 py-2 pl-4 pr-12 font-semibold">
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/bath/${encodeURIComponent("bath towels")}`}
                >
                  Bath Towels
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/bath/${encodeURIComponent("bath vanities")}`}
                >
                  Bath Vanities
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/bath/tubs">Tubs</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/bath/showers">Showers</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/bath/toilets">Toilets</Link>
              </li>
            </ul>
          )}
          {showKitchenSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[52px] rounded-r-xl border-sky-700 py-2 pl-4 pr-5 font-semibold">
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/kitchen/${encodeURIComponent(
                    "dining bowls"
                  )}`}
                >
                  Dining Bowls
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/kitchen/${encodeURIComponent(
                    "flatware sets"
                  )}`}
                >
                  Flatware Sets
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/kitchen/${encodeURIComponent(
                    "dinnerware sets"
                  )}`}
                >
                  Dinnerware Sets
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/kitchen/${encodeURIComponent(
                    "wine & champagne Glasses"
                  )}`}
                >
                  Wine & Champagne Glasses
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/kitchen/${encodeURIComponent(
                    "drinking glasses"
                  )}`}
                >
                  Drinking Glasses
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/kitchen/${encodeURIComponent(
                    "mugs & teacups"
                  )}`}
                >
                  Mugs & Teacups
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/kitchen/${encodeURIComponent(
                    "coffee makers"
                  )}`}
                >
                  Coffee Makers
                </Link>
              </li>
            </ul>
          )}
          {showOutdoorsSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[156px] rounded-r-xl border-sky-700 py-2 pl-4 pr-12 font-semibold">
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/outdoor/${encodeURIComponent(
                    "furniture sets"
                  )}`}
                >
                  Furniture Sets
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/outdoor/lanterns">Lanterns</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/outdoor/planters">Planters</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/outdoor/doormats">Doormats</Link>
              </li>
            </ul>
          )}
          {showLightingSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[260px] rounded-r-xl border-sky-700 py-2 pl-4 pr-12 font-semibold">
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/lighting/${encodeURIComponent(
                    "ceiling lights"
                  )}`}
                >
                  Ceiling Lights
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/lighting/${encodeURIComponent(
                    "table lamps"
                  )}`}
                >
                  Table Lamps
                </Link>
              </li>
            </ul>
          )}
          {showDecorSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[98px] rounded-r-xl border-sky-700 py-2 pl-4 pr-12 font-semibold">
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/decor/${encodeURIComponent(
                    "baskets & boxes"
                  )}`}
                >
                  Baskets & Boxes
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/decor/vases">Vases</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/decor/planters">Planters</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/decor/${encodeURIComponent(
                    "picture frames"
                  )}`}
                >
                  Picture Frames
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/decor/pillows">Pillows</Link>
              </li>
            </ul>
          )}
          {showWallsSubcategory && (
            <ul className="border-y-2 border-r-2 mt-[266px] rounded-r-xl border-sky-700 py-2 pl-4 pr-12 font-semibold">
              <li className="py-2 hover:underline">
                <Link
                  href={`/products/walls/${encodeURIComponent("wall art")}`}
                >
                  Wall Art
                </Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/walls/clocks">Clocks</Link>
              </li>
              <li className="py-2 hover:underline">
                <Link href="/products/walls/mirrors">Mirrors</Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </>
  );
};

export default ProductsNavbar;
