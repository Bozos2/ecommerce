import ProductsNavbar from "@/app/components/ProductsNavbar";
import ProductsCard from "@/app/components/UI/ProductsCard";
import { fetchData } from "@/app/lib/fetchData";

export default async function Page({
  params,
}: {
  params: { categoryID: string[] };
}) {
  const products = await fetchData();

  const [category, subcategory] = params.categoryID.map((param) =>
    decodeURIComponent(param.toLowerCase())
  );

  const sortedProducts = products
    .filter((product) => {
      const productCategory = product.category.toLowerCase();
      const productSubcategory = product.subcategory.toLowerCase();

      if (subcategory) {
        return (
          productCategory === category && productSubcategory === subcategory
        );
      } else {
        return productCategory === category;
      }
    })
    .sort((a, b) => a.category.localeCompare(b.category));

  return (
    <section className="flex flex-col  xl:flex-row xl:mx-6 mb-24">
      <div>
        <ProductsNavbar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 xl:mt-10">
        {sortedProducts.map((data) => (
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
        ))}
      </div>
    </section>
  );
}
