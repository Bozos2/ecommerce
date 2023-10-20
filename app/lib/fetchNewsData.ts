import { MongoClient } from "mongodb";

export const getData = async () => {
  const client = await MongoClient.connect(`${process.env.MONGO_URL}`);
  const db = client.db();

  const newsCollection = db.collection("news");

  const news = await newsCollection.find().toArray();

  client.close();

  return news;
};
