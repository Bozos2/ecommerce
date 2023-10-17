import { fetchData } from "../lib/fetchData";
import Image from "next/image";

interface DetailPageProps {
  productID: string;
}

const DetailPage: React.FC<DetailPageProps> = async ({ productID }) => {
  const products = await fetchData();
  const product = products.find((p) => p._id.toString() === productID);
  console.log(product);

  return (
    <div>
      {product ? (
        <div className="flex flex-row w-[320px] sm:max-w-[1180px] sm:w-full h-[480px] sm:h-[260px] lg:h-[380px]">
          <div className="h-[220px]">
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={product.image}
              alt="Picture of the post"
            />
          </div>
          <div>
            <h1>{product.title}</h1>
            <p>{product.category}</p>
            <p>Price: {product.price}</p>
            {/* Add additional details as needed */}
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default DetailPage;
