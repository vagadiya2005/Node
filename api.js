const express = require('express');
const dbconnection = require('./mogodB');

const app = express();
const port = 5600;
  
app.use(express.json()); // express.json() is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
// When this middleware is used, it will automatically parse the request body as JSON and make it available under req.body.

app.get('/',async(req,res)=>{  // get API to get data from database

    const collection = await dbconnection();
    const data = await collection.find().toArray();  // get data in from of array

res.send(data);

})

app.post('/',async(req,res)=>{  // post API for insert data to database 

const data= await dbconnection();
let result = await data.insertOne(req.body);  // inseret single data with use of insertOne().

res.send(result);

})

app.put('/',async(req,res)=>{  // put API for update data in database

const data = await dbconnection();
let result = data.updateOne(  // update single data with use of updateOne().

    // {name:'madhavm'},   // satatic data update 
    // {$set :{ name: 'madarchod'}} 

    {name: req.body.name},  //  daynamic data update
    {$set:req.body}

)
res.send(result);
})

app.delete('/',async(req,res)=>{

const data = await dbconnection();
let result = await data.deleteOne({name:req.body.name});  // delete single data with use of deleteOne.
res.send(result);
})

app.listen(port);