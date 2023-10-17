import ProductsCard from "@/app/components/UI/ProductsCard";
import ProductsNavbar from "@/app/components/ProductsNavbar";
import { fetchData } from "@/app/lib/fetchData";
import Link from "next/link";

const Products = async () => {
  const products = await fetchData();

  return (
    <section className="flex flex-col  xl:flex-row xl:mx-6 mb-24">
      <div>
        <ProductsNavbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 xl:mt-10">
        {products.map((data) => (
          <Link
            key={data._id.toString()}
            href="/products/[...categoryID]"
            as={`/products/${data.category.toLowerCase()}/${data.subcategory.toLowerCase()}/${data._id.toString()}`}
          >
            <ProductsCard
              key={data._id.toString()}
              id={data._id.toString()}
              src={data.image}
              category={data.category}
              subcategory={data.subcategory}
              title={data.title}
              price={parseFloat(data.price)}
              colors={data.colors}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
