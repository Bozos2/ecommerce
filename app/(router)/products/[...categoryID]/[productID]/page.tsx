import { fetchData } from "@/app/lib/fetchData";

const ProductDetail = async ({ params }: { params: { productID: string } }) => {
  try {
    const products = await fetchData();

    const product = products.find(
      (product) => String(product._id) === params.productID
    );

    if (!product) {
      return <div>Product not found</div>;
    }

    return (
      <div>
        <h1>{product.category}</h1>
        <p>{product.subcategory}</p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Fetch error</div>;
  }
};

export default ProductDetail;
