const express = require("express");

require("./config");
const Product = require("./product");

const app = express();

app.use(express.json());


app.post('/',async(req,res)=>{  // POST API

const data = await Product.insertMany(req.body);
res.send(data);
console.log(data);


});

app.get('/',async(req,res)=>{  // GET API

  const products = await Product.find(); // get data from DB or find specefic data.
  res.send(products);
  console.log(products);

});

app.put('/',async(req,res)=>{  // PUT API

  const data = await Product.updateOne(  // as well as use .updateMany().

    {name: 'M 34'},
    {$set: {name: 'S 22'}}

  )

  res.send(data);
  console.log(data);

});

app.delete('/',async(req,res)=>{ // DELETE API

  const data = await Product.deleteOne(req.body);
  res.send(data);
  console.log(data);

});


app.get('/search/:key',async(req,res)=>{   // Search API

let data = await Product.find({

"$or":[  // $or  for multiple thread search means search key multiple fileds.

      {"name":{$regex:req.params.key}},
      {"brand":{$regex:req.params.key}}

]

});

res.send(data);
console.log(data);


});


app.listen(5600);
