const { MongoGCPError } = require('mongodb');
const mongoose = require('mongoose');


const MongooseConnect = async()=>{

  const url = 'mongodb+srv://23ce140:cxFGrQJU8OeTCXVG@cluster0.paezpii.mongodb.net/example';

  await mongoose.connect(url);
  console.log('Connected.');
  
}



const ProductSchema = mongoose.Schema({

name: String,
prize: Number,
brand: String,
category: String

})



const insetData = async()=>{


const Product = mongoose.model('products',ProductSchema); // create model.

let data =  new Product({name:'mi note 11 pro max',prize:23000 , brand:'MI' });

let result = await data.save();

console.log(result);

}

const updateData = async()=>{

  MongooseConnect();

  const Product = mongoose.model('products',ProductSchema); // create model.
  
  let data = await Product.updateOne( // as well as .updateMany({}).

    {name:'mi note 11 pro max'},

    { $set: {prize: 25000} }


  )

  console.log(data);

}

const deleteData = async()=>{

  MongooseConnect();

  const Product = mongoose.model('products',ProductSchema); // create model.

  let data = await Product.deleteMany(  // as well as .deleteOne({});

    {prize: 23000}
  )
  
  console.log(data);
  

}


const findData = async()=>{

    MongooseConnect();
  const Product = mongoose.model('products',ProductSchema); // create model.

let data = await Product.find(  // also use ==>  find()  for saw all data
  {name:'mi', price:5000} // here we find specific data
);

console.log(data);


}

// insetData();
// updateData();
// deleteData();
// findData();