import { MongoClient } from "mongodb";

export const fetchSalesData = async () => {
  try {
    const client = await MongoClient.connect(`${process.env.MONGODB_NEXT}`);
    const db = client.db();

    const productsCollection = db.collection("sales");

    const products = await productsCollection.find().toArray();

    client.close();

    return products;
  } catch (error) {
    console.error("Error fetching data:", error);
    return Promise.reject(error);
  }
};
