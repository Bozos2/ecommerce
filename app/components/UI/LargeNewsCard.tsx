"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const imageStyle = {
  borderRadius: "10%",
  border: "1px solid #fff",
};

const avatarStyle = {
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  marginTop: "6px",
};

const LargeNewsCard: React.FC<{
  src: any;
  avatar: string;
  author: string;
  published: any;
  title: string;
  subtitle: string;
  category: string;
}> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.05 },
      }}
      className="relative grid grid-cols-1 sm:grid-cols-2  w-[320px] sm:max-w-[1180px] sm:w-full h-[480px] sm:h-[260px] lg:h-[380px] z-0 mb-4 mx-2 sm:mx-12 xl:mx-0 p-2 border-2 border-gray-300 rounded-lg sm:border-none cursor-pointer transition ease-in duration-500"
    >
      <div className="relative  h-[220px] lg:h-full">
        <Image
          fill
          objectFit={"cover"}
          src={props.src}
          alt="Picture of the post"
          /* width={550}
          height={380} */
          style={imageStyle}
          priority
        />
      </div>
      <div className="flex flex-col mt-[-20px] sm:mt-0 px-2 sm:pl-8 mb-6">
        <div className="flex flex-row sm:pt-2 lg:pt-4">
          <Image
            src={props.avatar}
            alt="avatar picture"
            width={24}
            height={24}
            style={avatarStyle}
            priority
          />

          <p className="text-sm sm:text-base pt-2 pl-2 font-light">
            {props.author} {`\u2022`}
            <span className="text-xs lg:text-sm  pl-4">{props.published}</span>
          </p>
        </div>
        <h2 className="font-semibold text-xl lg:text-4xl sm:font-bold pt-1 sm:pt-2">
          {props.title}
        </h2>
        <div className="h-24">
          <p className="text-sm sm:text-normal lg:text-lg sm:pt-1">
            {props.subtitle}
          </p>
        </div>
        <p className="text-sky-600 text-base font-semibold  absolute bottom-2  sm:bottom-6 sm:font-bold ">
          {props.category}
        </p>
      </div>
    </motion.div>
  );
};

export default LargeNewsCard;
