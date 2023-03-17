import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://maciejrosa1:Fk6o59qMk46Z9eLQ@cluster0.at75os5.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const pilotsCollection = db.collection("pilots");

    const result = await pilotsCollection.insertOne(data);

    console.log(result);

    //handle errors too!

    client.close();

    res.status(201).json({ message: "Pilot inserted" });
  }
}
export default handler;
