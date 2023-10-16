import PhoneSVG from "@/app/assets/ContactIcons/PhoneSVG";
import ReportSVG from "@/app/assets/ContactIcons/ReportSVG";
import ContactSVGIcon from "@/app/assets/ContactIcons/ContactSVG";

const ContactCards = () => {
  return (
    <section className="flex flex-row flex-wrap justify-center gap-8 font-oswald">
      <div className="w-[340px] h-[280px] flex flex-col pt-3 items-center rounded-xl border-2 shadow-gray-400 shadow-xl hover:shadow-2xl hover:shadow-gray-600 hover:cursor-pointer">
        <ContactSVGIcon />{" "}
        <h2 className="font-semibold text-2xl text-sky-600 tracking-wider pt-2">
          Contact Support
        </h2>
        <p className="pt-2">Help with payments and delivery</p>
      </div>
      <div className="w-[340px] h-[280px] flex flex-col pt-3 items-center rounded-xl border-2 shadow-gray-400 shadow-xl hover:shadow-2xl hover:shadow-gray-600 hover:cursor-pointer">
        <PhoneSVG />
        <h2 className="font-semibold text-2xl text-sky-600 tracking-wider pt-2">
          Call Center
        </h2>
        <p className="pt-2">Information about products</p>
      </div>
      <div className="w-[340px] h-[280px] flex flex-col pt-3 items-center rounded-xl border-2 shadow-gray-400 shadow-xl hover:shadow-2xl hover:shadow-gray-600 hover:cursor-pointer">
        <ReportSVG />
        <h2 className="font-semibold text-2xl text-sky-600 tracking-wider pt-2">
          Report Bug
        </h2>
        <p className="pt-2">If you face problem on website</p>
      </div>
    </section>
  );
};

export default ContactCards;
