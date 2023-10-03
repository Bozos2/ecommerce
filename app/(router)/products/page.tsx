import ProductsCard from "@/app/components/ProductsCard";
import ProductsNavbar from "@/app/components/ProductsNavbar";

import datas from "../../json/products.json";

const Products = async () => {
  return (
    <section className="flex flex-col  xl:flex-row xl:mx-6 mb-24">
      <div>
        <ProductsNavbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 xl:mt-10">
        {datas.map((data) => (
          <ProductsCard
            src={data.image}
            category={data.category}
            subcategory={data.subcategory}
            title={data.title}
            price={data.price}
            colors={data.colors}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
