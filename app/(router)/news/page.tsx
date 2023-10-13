import Link from "next/link";
import { MongoClient } from "mongodb";

import NewsCard from "@/app/components/UI/NewsCard";
import LargeNewsCard from "@/app/components/UI/LargeNewsCard";
import { Suspense } from "react";

const News = async () => {
  const news = await getData();

  const restOfData = news.slice(1);

  return (
    <Suspense>
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
              src={news[0].background}
              avatar={news[0].avatar}
              published={news[0].published}
              author={news[0].author}
              title={news[0].title}
              subtitle={news[0].subtitle}
              category={news[0].category}
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
                key={item.id}
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
    </Suspense>
  );
};

export const getData = async () => {
  const client = await MongoClient.connect(`${process.env.MONGO_URL}`);
  const db = client.db();

  const newsCollection = db.collection("news");

  const news = await newsCollection.find().toArray();

  client.close();

  return news;
};

export default News;
