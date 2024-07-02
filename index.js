const express = require('express');
const path = require('path');

const app = express();

const htmlPath = path.join(__dirname,'public');


app.get('',(req,res)=>{

res.sendFile(`${htmlPath}/index.html`);

})

app.get('/about',(req,res)=>{

res.sendFile(`${htmlPath}/about.html`);

})

app.get('/help',(req,res)=>{

    setTimeout(() => {
       res.sendFile(`${htmlPath}/help.html`);
    }, 4000);

});



app.get('*',(req,res)=>{

res.sendFile(`${htmlPath}/page404.html`);

})

app.listen(5500);