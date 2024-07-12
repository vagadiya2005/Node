const dbconnection = require('./mogodB');

const deleteData = async()=>{

    try{
        
        const collection =await dbconnection();

        // const result = await collection.deleteOne({name:'madhavm'});
        const result = await collection.deleteMany({name:'mad'});
        console.log(result);
        }
        catch(err){
            console.log(err);
            }
        
}

deleteData();