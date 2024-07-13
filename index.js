const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://23ce140:cxFGrQJU8OeTCXVG@cluster0.paezpii.mongodb.net/example"
  );
  console.log("connected sucessfully");

  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });
  
  // Here "products" is a collection of DB. and ProductSchema is a Schema of our data collection.
  const ProductModel = mongoose.model("products", ProductSchema);

    // create data with model named "ProductModel".
  const data = new ProductModel({ name: "oppo", price: 5000 , sex:"mela"});

  // save data in DB.
  let result = await data.save();


  console.log(result);

};

main();
