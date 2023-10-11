import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useCartContext } from "../../context/cart-reducer";
import CartIconSVG from "../../assets/NavbarIcons/CartIconSVG";
import CartForm from "./CartForm";

const CartButton = () => {
  const ctxData = useCartContext();
  const numberOfItems = ctxData.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-pointer font-oswald transition ease-in duration-200 hover:-translate-y-0.5  hover:scale-110">
          <span className="">
            <CartIconSVG />
          </span>
          <span className="absolute mt-[-52px] ml-2 font-semibold bg-red-600 px-2 rounded-full">
            {numberOfItems}
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
