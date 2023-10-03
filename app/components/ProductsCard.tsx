import Image from "next/image";
import image1 from "../assets/background.jpg";

interface CardProps {
  src: string;
  category: string;
  subcategory: string;
  title: string;
  colors: string[];
  price: string;
}

const ProductsCard: React.FC<CardProps> = (props) => {
  const colorDivs = props.colors.map((color, index) => (
    <div
      key={index}
      style={{ backgroundColor: color }}
      className="w-[30px] h-[30px] rounded-full shadow-xl cursor-pointer focus:outline focus:outline-sky-600 focus:outline-offset-2"
      tabIndex={0}
    ></div>
  ));

  return (
    <div className="flex flex-wrap justify-center m-5 xl:m-6">
      <div className="flex flex-col  font-nunito min-w-[240px] w-[380px]  h-[510px]  mx-2 shadow-xl bg-slate-200 rounded-xl cursor-pointer transition ease-in duration-500 hover:-translate-y-0.5  hover:scale-110">
        <div className="relative h-2/4">
          <Image
            fill
            style={{ objectFit: "cover", borderRadius: "3%" }}
            src={props.src}
            alt="Product picture"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="my-2 mx-4">
          <h4 className="text-sky-700 font-bold text-xl">{props.category}</h4>
          <p className="text-sm font-normal">{props.subcategory}</p>
          <h1 className="mt-2 text-2xl font-black">{props.title}</h1>
          <div className="flex justify-center gap-2 mt-2">{colorDivs}</div>
          <h2 className="mt-2 font-bold text-2xl">{props.price}$</h2>
          <div className="flex justify-end">
            <button className="bg-sky-600 py-2 px-14 mt-6 rounded-xl text-white font-bold hover:border-2 hover:border-sky-600 hover:bg-slate-200 hover:text-sky-600 transition ease-in  duration-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
