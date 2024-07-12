// const { MongoClient } = require("mongodb");
// const url =
//   "mongodb+srv://23ce140:cxFGrQJU8OeTCXVG@cluster0.paezpii.mongodb.net/";

// const client = new MongoClient(url);

// const dataBaseName = "example";  // intialize database name

// async function getData() {
//   let result = await client.connect();  // try to connect mongoDb server
//   console.log("Connected successfully to server");
//   let db = result.db(dataBaseName);  // select database
//   let collection = db.collection("data"); // select collecyion of our database

//   let data = {   // create data for inserting data in collection of database
//     name: "prince vagadiya",
//     village: "ratang",
//     collage: "charusat",
//   };
//   let multipleData = [    // create multiple data like array of data to insert multiple record at a single time
//     { name: "Alice", age: 25, address: "456 Elm St" },  // each record will seprated by ','
//     { name: "Bob", age: 22, address: "789 Oak St" },
//   ];

//   let insertdata = await collection.insertOne(data);  // insert single record

//   console.log(`insert data at id : ${insertdata.insertedId}`);  // get insert ID of record

//   let insermultipledata = await collection.insertMany(multipleData); // insert multiple data

//   let response = await collection.find({}).toArray();  // print all data from collection in form of array
//   console.log(response);
// }

// getData();  // calling function to execute all of this things

const dbconnection = require("./mogodB");
const collection = require("./mogodB");

const main = async () => {
  let data = await dbconnection(); // dbconnection() returns collection.

  data= await data.find().toArray();

  console.log(data);
};
