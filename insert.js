const dbconnection = require('./mogodB');

const insertdata = async()=>{

const collection = await dbconnection();

const result=collection.insertOne({ 
name: 'madhavm',
age: 20,
hobby: 'not found'

})

}

insertdata(); 
module.exports = insertdata;