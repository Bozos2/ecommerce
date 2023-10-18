import DeliveryIcon from "@/app/assets/DetailIcons/DeliverySVG";
import TrialIcon from "@/app/assets/DetailIcons/TrialSVG";
import WarrantyIcon from "@/app/assets/DetailIcons/WarrantySVG";

const DetailCards = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row justify-center gap-4 cursor-pointer">
      <div className="flex flex-col pt-5 font-semibold tracking-tighter items-center text-sm gap-2 border-2 w-[140px] h-[120px]">
        <WarrantyIcon /> <p className="px-2 text-center">5-year warranty</p>
      </div>
      <div className="flex flex-col pt-5 font-semibold tracking-tighter items-center text-sm gap-2 border-2 w-[140px] h-[120px]">
        <TrialIcon />{" "}
        <p className="px-2 text-center">Risk-free,50-days trial</p>
      </div>
      <div className="flex flex-col pt-5 font-semibold tracking-tighter items-center text-sm gap-2 border-2 w-[140px] h-[120px]">
        <DeliveryIcon /> <p className="px-2 text-center">Free delivery</p>
      </div>
    </div>
  );
};

export default DetailCards;
