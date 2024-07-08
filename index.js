const express = require('express');
const reqFilter = require('./views/middelware');
const { Route } = require('express');
const app = express();
const route = express.Router();


route.use(reqFilter);
// app.use(reqFilter); // application middelware it's working in all routes.

route.get('/',(req,res)=>{

        res.send('Welcom to Home Page ');

})

// here reqFilter is a route level middelware it's apply in specefic routes.
app.get('/about',reqFilter,(req,res)=>{

    res.send('Welcom to About Page');

})


route.get('/help',(req,res)=>{

    res.send('Welcom to Help Page');

})

app.use('/',route);

app.listen(1000);