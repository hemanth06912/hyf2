const fs = require('fs');

const cheap_mealsRouter = (req,res)=>{
    
    res.writeHead(200,
        {'content-type': 'application/json'})
    fs.readFile('meals.json',(err,data)=>{
        if(err){
            res.write('error')
        }else{
              (price)=> {
                return data.sort(function(a,b) { 
                  return a[price] < b[price];
                });
              }
        }
        res.end()
    })   
};

module.exports = cheap_mealsRouter;
