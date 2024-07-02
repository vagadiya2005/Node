const { profile } = require('console');
const express = require('express');
const path = require('path');

const app = express();

const htmlPath = path.join(__dirname,'public');

// set 'ejs' as a template engine.
app.set('view engine','ejs');


app.get('',(req,res)=>{

res.sendFile(`${htmlPath}/index.html`);

})

app.get('/about',(req,res)=>{

res.sendFile(`${htmlPath}/about.html`);

})



app.get('/profile',(req,res)=>{

    const user={  // create user in json format.
        name:'John Doe',
        age:30,
        profession:'Web Developer',
        skill: ['react','php','Django']
        }

        res.render('profile',{user}); // use ejs and send user to webpage
    
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