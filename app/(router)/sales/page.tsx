import Countdown from "@/app/components/UI/CountdownTimer";
import img1 from "../../assets/chair.png";
import Image from "next/image";

const Sales = () => {
  return (
    <div className="flex flex-col  items-center my-9 mx-4 sm:my-16 sm:mx-0">
      <h2 className="text-4xl lg:text-7xl text-center font-bold text-sky-700 font-oswald tracking-wide sm:tracking-widest">
        Autumn Sale
      </h2>
      <h4 className="text-xl lg:text-3xl font-semibold text-sky-700 font-oswald mt-6 text-center">
        Best sales, save up to 45%! Sales only for a limited time! Be Quick!
      </h4>
      <Countdown />
      <div className="h-[600px] w-full mt-12">
        {" "}
        <div className="h-[300px] w-full bg-sky-700 -skew-y-3 ">
          <Image src={img1} alt="testest" className="pt-4 " />{" "}
          <h2 className="text-black pt-12 font-semibold text-2xl ml-[320px]">
            Special Offer!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sales;
