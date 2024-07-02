const express = require('express');
const path = require('path');

const app = express();

// select public folder
const abouPath = path.join(__dirname,'public');
 
// send respons in form of html page
app.use(express.static(abouPath)); // here abouPath is a folder path.
// app.use(express.static('public'));  Here express.static load static pages.


// send html page which present in public folder localhost:port/ex.html
app.listen(5500);   