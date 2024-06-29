const { dir } = require('console');
const fs = require('fs');
const path = require('path');

// craete file path with filepath and create newfile.txt
const filepath = path.join(__dirname,'newFile.txt');
const experimentFile = path.join(__dirname,'expFile.txt');

// create new file using writeFileSync
fs.writeFileSync(filepath,'i am a new file');

// read file content utf8 must add 
fs.readFile(filepath,'utf8',(err,item)=>{

    // if error not occured then display item 
    if(!err)
console.log(item);

    else
    console.log('getting error');

})

// append file content.
fs.appendFileSync(filepath,' this content is appended');

// direct create file and append text.
fs.appendFileSync(experimentFile,'this is experimental file');

// create new folder  path 
const dirPath = path.join(__dirname,'newFolder');

function CreateNewFolder(dirPath){


    try{
        // careate new dir 
        fs.mkdirSync(dirPath, {recursive: true});
        console.log('folder created');

        // if dir not created then throw error
    }catch(err){
        console.log(`error generated : ${err.message}`);
        
    }

    // function name and dir name
}  CreateNewFolder('./newFolder');

 





