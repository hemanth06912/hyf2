const fs = require('fs');

const large_mealsRouter = (req,res)=>{
    
    res.writeHead(200,
        {'content-type': 'application/json'})
    fs.readFile('meals.json',(err,data)=>{
        if(err){
            res.write('error')
        }else{
              (maxNumberOfGuests)=> {
                return data.sort(function(a,b) { 
                  return a[maxNumberOfGuests] < b[maxNumberOfGuests];
                });
              }
        }
        res.end()
    })   
};

module.exports = large_mealsRouter;
