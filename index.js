const express = require('express');
const reqFilter = require('./views/middelware')

const app = express();


// app.use(reqFilter); // application middelware it's working in all routes.

app.get('',(req,res)=>{

        res.send('Welcom to Home Page ');

})

// here reqFilter is a route level middelware it's apply in specefic routes.
app.get('/about',reqFilter,(req,res)=>{

    res.send('Welcom to About Page');

})

app.listen(1000);