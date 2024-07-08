module.exports = reqFilter=(req,res,next)=>{

    console.log('middelware');
  
    if(req.query.age>18){
  
    next();
    }
  
  }