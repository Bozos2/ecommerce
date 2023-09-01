const DUMMY_DATA = [
  {
    id: "1",
    published: "24 minutes ago",
    author: "Sarah",
    avatar:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "How Customers Changed Their Space",
    background:
      "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subtitle:
      "Your home's story is your story. In this article, we present inspiring tales from our loyal customers who turned their homes into havens of style and comfort with the help of our furniture.  ",
    category: "Stories",
  },
  {
    id: "2",
    published: "yesterday",
    author: "Mike",
    avatar:
      "https://images.pexels.com/photos/8688533/pexels-photo-8688533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "5 Tips for Choosing the Perfect Furniture",
    background:
      "https://images.pexels.com/photos/6606354/pexels-photo-6606354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subtitle:
      "Choosing the right furniture is not just about functionality, but also about creating an aesthetic experience that reflects your personal style.You can find there what u need",
    category: "Tips",
  },
  {
    id: "3",
    published: "June 9,2023",
    author: "Mike",
    avatar:
      "https://images.pexels.com/photos/8688533/pexels-photo-8688533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sustainable Decorating: Designing an Eco-Conscious Home",
    background:
      "https://images.pexels.com/photos/9369637/pexels-photo-9369637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subtitle:
      "Delve into the world of sustainable design, where every choice you make brings you closer to a harmonious relationship with the environment.",
    category: "Healthy",
  },
  {
    id: "4",
    published: "May 24,2023",
    author: "Miley",
    avatar:
      "https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Latest Interior Design Trends for This Season",
    background:
      "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subtitle:
      "Welcome to the world of inspiration and innovation in interior design! Each season brings new trends that shape the way we perceive and decorate our homes. ",
    category: "Trending",
  },
  {
    id: "5",
    published: "March 13,2023",
    author: "Sarah",
    avatar:
      "https://images.pexels.com/photos/458718/pexels-photo-458718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Latest Arrivals: Introducing Our New Furniture Collection",
    background:
      "https://images.pexels.com/photos/10937129/pexels-photo-10937129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subtitle:
      "Welcome to a world of innovation and style as we unveil our freshest creations the embodiment of design excellence. ",
    category: "New collection",
  },
  {
    id: "6",
    published: "February 18,2023",
    author: "Miley",
    avatar:
      "https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Small Space Decorating: How to Maximize Your Home's Potential",
    background:
      "https://images.pexels.com/photos/4582820/pexels-photo-4582820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subtitle:
      " In this article, we'll dive into the art of decorating compact apartments or rooms, unlocking their full potential for both functionality and aesthetics.",
    category: "Tips",
  },
  {
    id: "7",
    published: "January 9,2023",
    author: "Mike",
    avatar:
      "https://images.pexels.com/photos/8688533/pexels-photo-8688533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Colors and Patterns: How to Harmonize Design in Your Home",
    background:
      "https://images.pexels.com/photos/110645/pexels-photo-110645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subtitle:
      "In this article, we will delve into the art of selecting colors and patterns and mastering the art of their seamless fusion to achieve the desired aesthetic.",
    category: "Trending",
  },
  {
    id: "8",
    published: "December 22,2022",
    author: "Miley",
    avatar:
      "https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Creative Home Decoration Ideas for the Holidays",
    background:
      "https://images.pexels.com/photos/10550507/pexels-photo-10550507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subtitle:
      "Prepare to immerse yourself in a world of festive magic and creative expression as we dive into the art of decorating your home for various holidays and special occasions.",
    category: "Tips",
  },
  {
    id: "9",
    published: "October 16,2022",
    author: "Mike",
    avatar:
      "https://images.pexels.com/photos/8688533/pexels-photo-8688533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "How to Properly Clean and Maintain Your Furniture",
    background:
      "https://images.pexels.com/photos/4440533/pexels-photo-4440533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subtitle:
      "Quality furniture is an investment in your home's aesthetics and long-term comfort. Whether it's a plush seat or wooden surfaces...",
    category: "Tips",
  },
];

import Link from "next/link";

import NewsCard from "@/app/components/NewsCard";
import LargeNewsCard from "@/app/components/LargeNewsCard";

const News = () => {
  const restOfData = DUMMY_DATA.slice(1);
  return (
    <div className="flex justify-center">
      <div className="flex  flex-col justify-center  items-center max-w-[1200px]">
        <div className="flex flex-col items-center justify-center gap-4  sm:w-full  h-44  m-4 rounded-lg bg-zinc-300">
          <h4 className="text-base pt-2 sm:text-lg font-bold">
            Welcome to News Page
          </h4>
          <h2 className="text-center p-2 text-lg sm:text-xl sm:px-24 font-bold">
            Discover a world of{" "}
            <span className="text-sky-600">inspiration</span> 💡,
            <span className="text-sky-600">knowledge</span> 📚, and
            <span className="text-sky-600"> entertainment</span> 🎭 that will
            keep you informed and engaged.
          </h2>
        </div>
        <div className="flex justify-center  mt-6 sm:mt-4 lg:mb-12">
          <LargeNewsCard
            src={DUMMY_DATA[0].background}
            avatar={DUMMY_DATA[0].avatar}
            published={DUMMY_DATA[0].published}
            author={DUMMY_DATA[0].author}
            title={DUMMY_DATA[0].title}
            subtitle={DUMMY_DATA[0].subtitle}
            category={DUMMY_DATA[0].category}
          />
        </div>
        <div className="flex flex-row justify-between mt-4 mb-12 w-full  px-4">
          <h4 className="font-bold text-3xl flex-none">Latest News</h4>
          <Link
            href="/all"
            className="text-sky-600 font-bold text-xl pt-1 pr-6 flex-none"
          >
            See all &rarr;
          </Link>
        </div>
        <div className="flex flex-wrap justify-center mb-6 gap-5">
          {restOfData.map((item) => (
            <NewsCard
              src={item.background}
              avatar={item.avatar}
              published={item.published}
              author={item.author}
              title={item.title}
              subtitle={item.subtitle}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default News;
