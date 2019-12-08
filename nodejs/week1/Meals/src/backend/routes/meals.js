
const fs = require('fs');

const mealsRouter = (req,res)=>{
    res.writeHead(200,
        {'content-type': 'application/json'})
    fs.readFile('meals.json',(err,data)=>{
        if(err){
            res.write('error')
        }else{
            res.write(data)
        }
        res.end()
    })   
};

module.exports = mealsRouter;
