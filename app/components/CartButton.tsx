import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import CartIconSVG from "../assets/NavbarIcons/CartIconSVG";
import CartForm from "./Cart/CartForm";

const CartButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-pointer font-oswald transition ease-in duration-200 hover:-translate-y-0.5  hover:scale-110">
          <span className="">
            <CartIconSVG />
          </span>
          <span className="absolute mt-[-52px] ml-2 font-semibold bg-red-600 px-2 rounded-full">
            0
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="gap-4 border-b-2 pb-4 text-xl">
            Shoping Cart
          </DialogTitle>
        </DialogHeader>
        <div>
          <CartForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CartButton;
