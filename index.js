const express = require('express');
const mongoose = require('mongoose');
require('./config');
const app = express();
const user = require('./Database/User');

app.use(express.json());

app.post('/register',async(req,res)=>{

console.log('api running');

let data =  new user(req.body);
let result = await data.save();
res.send(result);

});

app.listen(5600);