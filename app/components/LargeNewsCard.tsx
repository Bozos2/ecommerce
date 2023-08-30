import Image from "next/image";

const imageStyle = {
  borderRadius: "10%",
  border: "1px solid #fff",
};

const avatarStyle = {
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  "margin-top": "6px",
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
    <div className="relative grid grid-cols-2  max-w-[1180px] h-[380px] z-0 mb-4  p-2 border-2 border-gray-300 rounded-lg sm:border-none cursor-pointer">
      <div className="relative">
        <Image
          layout="fill"
          objectFit="cover"
          src={props.src}
          alt="Picture of the post"
          /* width={550}
          height={380} */
          style={imageStyle}
        />
      </div>
      <div className="flex flex-col pl-8">
        <div className="flex flex-row pt-4">
          <Image
            src={props.avatar}
            alt="avatar picture"
            width={24}
            height={24}
            style={avatarStyle}
          />
          <p className="text-base pt-2 pl-2 font-light">
            {props.author} {`\u2022`}
            <span className="text-sm font-light pl-4">{props.published}</span>
          </p>
        </div>
        <h2 className="text-4xl font-bold pt-2">{props.title}</h2>
        <div className="h-24">
          <p className="text-lg pt-1">{props.subtitle}</p>
        </div>
        <p className="text-sky-600 text-base absolute bottom-6 font-bold ">
          {props.category}
        </p>
      </div>
    </div>
  );
};

export default LargeNewsCard;
