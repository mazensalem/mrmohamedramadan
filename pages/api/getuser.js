import { MongoClient } from "mongodb";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // const client = new MongoClient("");
  // await client.connect();
  // const db = client.db("mr.mohamed");
  // const col = db.collection("users");
  // const result = col.find({ code: req.body.code });
  res.status(200).json({ result: true });
}
