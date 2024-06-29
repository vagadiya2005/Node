const http = require('http');
const data= require('./data')

http.createServer((req,res)=>{

    res.writeHead(200,{'Cntent-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
        

}).listen(5500);