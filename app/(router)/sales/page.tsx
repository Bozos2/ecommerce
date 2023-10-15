import Countdown from "@/app/components/UI/CountdownTimer";

import Image from "next/image";
import chair from "../../assets/chair.png";
import woman from "../../assets/exited woman.png";
import SalesCard from "@/app/components/UI/SalesCard";
import { fetchSalesData } from "@/app/lib/fetchSalesData";

const Sales = async () => {
  const products = await fetchSalesData();

  return (
    <div className="flex flex-col  items-center my-9  sm:my-16">
      <h2 className="text-4xl lg:text-7xl text-center font-bold text-sky-700 font-oswald tracking-wide sm:tracking-widest mx-4">
        Autumn Sale
      </h2>
      <h4 className="text-xl lg:text-3xl font-semibold text-sky-700 font-oswald mt-6 text-center mx-4">
        Best sales, save up to 50%! Sales only for a limited time! Be Quick!
      </h4>
      <Countdown />
      <div className="h-[600px] sm:h-[700px] lg:h-[450px] w-full mt-24 lg:mt-12">
        {" "}
        <div className="h-[500px] sm:h-[630px] lg:h-[300px]  bg-sky-700 -skew-y-3 flex flex-col lg:flex-row justify-around">
          <div className="flex justify-center">
            <Image src={chair} alt="testest" className="pt-4 lg:mb-[-44px]" />
          </div>
          <div className="2xl:ml-[-220px]">
            <h2 className="lg:pt-12 font-bold text-2xl lg:text-5xl text-white text-center">
              Special Offer!
            </h2>
            <p className="pt-4 font-semibold text-lg lg:text-2xl text-white  text-center px-4">
              You can get this chair 30% off for a limited time{" "}
            </p>
            <p className="pt-4 font-semibold text-2xl text-white  text-center px-4">
              For only 89,99${" "}
            </p>
          </div>
          <Image
            src={woman}
            alt="sale image"
            width={320}
            height={320}
            className="pt-4 hidden lg:block"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:mt-10 w-full">
        {products.map((data) => (
          <SalesCard
            key={data._id.toString()}
            id={data._id.toString()}
            src={data.image}
            category={data.category}
            subcategory={data.subcategory}
            title={data.title}
            price={parseFloat(data.price)}
            oldprice={parseFloat(data.oldprice)}
            percentage={parseInt(data.percentage)}
            colors={data.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default Sales;
