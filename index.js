const express = require('express');

const app = express();

// basic rout setup
app.get('/hello',(req,res)=>{

        // query send by client in request
    console.log('data sending by client ---->',req.query);
    
    res.send('hello everyone again');

})

// app.get('/hello',(req,res)=>{  listen request at port number 5500
app.listen(5500);