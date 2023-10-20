"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const imageStyle = {
  borderRadius: "10%",
  border: "1px solid #fff",
  width: "250px",
  height: "220px",
};

const avatarStyle = {
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  "margin-top": "6px",
};

const NewsCard: React.FC<{
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
      className="relative  w-[280px] h-[480px] z-0 mb-4 sm:mb-24 p-2 border-2 border-gray-300 rounded-lg sm:border-none cursor-pointer transition ease-in duration-300"
    >
      <Image
        src={props.src}
        alt="Picture of the post"
        width={250}
        height={220}
        style={imageStyle}
        priority
      />
      <div className="flex flex-row">
        <Image
          src={props.avatar}
          alt="avatar picture"
          width={24}
          height={24}
          style={avatarStyle}
          priority
        />
        <p className="text-base pt-2 pl-2 font-light">
          {props.author} {`\u2022`}
          <span className="text-sm font-light pl-4">{props.published}</span>
        </p>
      </div>
      <h2 className="text-xl font-bold pt-2">{props.title}</h2>
      <div className="h-24">
        <p className="text-sm pt-1">{props.subtitle}</p>
      </div>
      <p className="text-sky-600 text-sm absolute bottom-1">{props.category}</p>
    </motion.div>
  );
};

export default NewsCard;
