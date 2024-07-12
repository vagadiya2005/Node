const dbconnection = require('./mogodB');

const updateData= async()=>{

const collection = await dbconnection();

const result = collection.updateOne(

{name:'hero'},
{ $set: { name: 'hero2' ,age:25 } }

)

const updatemany = collection.updateMany(
{name: 'madhav desai'},
{ $set: { name: 'madhavm' ,age:25 } }


)

}

updateData();