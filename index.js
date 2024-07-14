// const express = require("express");
// const multer = require("multer");
// const path = require('path');

// const app = express();

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + path.extname(file.originalname));
//     },
//   }),
// }).single('firstfile');



// app.post("/upload", upload,(req, res) => {
//   res.send("file uploaded");
//   console.log('File uploaded:', req.file);
// });

// app.listen(5600);

// const express = require('express');
// const multer = require('multer');

// const app=express();


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '/tmp/my-uploads')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

// const upload = multer({ storage: storage })


// app.post('/upload',upload.single('file'),(req,res)=>{

// res.send('file uploaded');
// console.log('File uploaded:', req.file);

// })


// app.listen(5600);

const os = require('os');

console.log(os.arch());  //  give Architecturet of our system like   x32  or  x64.
console.log(os.freemem()); // free memory in bytes.  
console.log(os.hostname());  // hostname of system.
console.log(os.platform());  // win32
console.log(os.userInfo());


