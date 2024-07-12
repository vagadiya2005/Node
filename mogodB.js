const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://23ce140:cxFGrQJU8OeTCXVG@cluster0.paezpii.mongodb.net/";

const client = new MongoClient(url);

const dataBaseName = "example"; // intialize database name

async function dbconnection() {
  let result = await client.connect();
  console.log("Database connected");

  let database = result.db(dataBaseName);
  let collection = database.collection("data");

  return collection;
}

module.exports = dbconnection;
