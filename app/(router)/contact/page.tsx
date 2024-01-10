import dynamic from "next/dynamic";

import ContactCards from "@/app/components/UI/ContactCards";

const DynamicMap = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

const Contact = () => {
  return (
    <section className="bg-zinc-200">
      <div className="relative z-0 shadow-2xl">
        <DynamicMap />
      </div>
      <div className="flex justify-center mt-4">
        <h2>
          <span className="font-bold">Area:</span> Old East Dallas{" "}
        </h2>
        <h2 className="ml-4">
          <span className="font-bold">Adress:</span> Live Oak Street{" "}
        </h2>
      </div>
      <div className="flex justify-center py-24">
        <ContactCards />
      </div>
    </section>
  );
};

export default Contact;
