import { MongoClient } from "mongodb";

export const fetchData = async () => {
  try {
    const client = await MongoClient.connect(`${process.env.MONGODB_NEXT}`);
    const db = client.db();

    const productsCollection = db.collection("products");

    const products = await productsCollection.find().toArray();

    client.close();

    return products;
  } catch (error) {
    console.error("Error fetching data:", error);
    return Promise.reject(error);
  }
};
