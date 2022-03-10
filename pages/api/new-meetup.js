import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const {title, image , address, desciption}=data;
    const client = await MongoClient.connect(
      "mongodb+srv://hemanta:L7CLFMvY3E2s2xBI@cluster0.xuaef.mongodb.net/meetup?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupCollection = db.collection("meetup");
    const result = await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({
      message: "meetup inserted",
    });
  }
}
export default handler;
