import CartIconSVG from "../assets/NavbarIcons/CartIconSVG";

const CartButton = () => {
  return (
    <button className="cursor-pointer font-oswald transition ease-in duration-200 hover:-translate-y-0.5  hover:scale-110">
      <span className="">
        <CartIconSVG />
      </span>
      <span className="absolute mt-[-52px] ml-2 font-semibold bg-red-600 px-2 rounded-full">
        0
      </span>
    </button>
  );
};
export default CartButton;
