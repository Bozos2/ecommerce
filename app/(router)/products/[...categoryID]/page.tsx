import Link from "next/link";

import ReportSVG from "@/app/assets/ContactIcons/ReportSVG";
import ProductsNavbar from "@/app/components/ProductsNavbar";
import ProductsCard from "@/app/components/UI/ProductsCard";
import { fetchData } from "@/app/lib/fetchData";
import DetailPage from "@/app/components/DetailPage";

const Page = async ({ params }: { params: { categoryID: string[] } }) => {
  const products = await fetchData();

  const [category, subcategory, productID] = params.categoryID.map((param) =>
    decodeURIComponent(param.toLowerCase())
  );

  const sortedProducts = products
    .filter((product) => {
      const productCategory = product.category.toLowerCase();
      const productSubcategory = product.subcategory.toLowerCase();
      const productDetail = product._id.toString();

      if (productID) {
        return (
          productCategory === category &&
          productSubcategory === subcategory &&
          productID === productDetail
        );
      } else if (subcategory) {
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
      {productID ? (
        <DetailPage productID={productID} />
      ) : (
        <>
          <div>
            <ProductsNavbar />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 xl:mt-10">
            {sortedProducts.map((data) => (
              <Link
                key={data._id.toString()}
                href="/[...categoryID]"
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
        </>
      )}
    </section>
  );
};

export default Page;
