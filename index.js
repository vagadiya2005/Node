const express = require("express");

require("./config");
const Product = require("./product");

const app = express();

app.use(express.json());

app.post("/create", async(req, res) => {
  res.send("done...");
  
  let data =  new Product(req.body);
  let result = await data.save();
 

});


app.listen(5600);
