import { fetchData } from "../lib/fetchData";
import DetailWrapper from "./UI/DetailProductWrapper";

interface DetailPageProps {
  productID: string;
}

const DetailPage: React.FC<DetailPageProps> = async ({ productID }) => {
  const products = await fetchData();
  const product = products.find((p) => p._id.toString() === productID);

  return (
    <div>
      {product ? (
        <div className="flex flex-wrap justify-center xl:my-8 mx-6 lg:m-8">
          <DetailWrapper
            id={product._id.toString()}
            src={product.image}
            title={product.title}
            category={product.category}
            subcategory={product.subcategory}
            colors={product.colors}
            price={parseFloat(product.price)}
          />
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default DetailPage;
