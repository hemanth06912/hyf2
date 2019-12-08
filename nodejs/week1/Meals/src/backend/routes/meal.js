const fs = require('fs');

const mealRouter = (req,res)=>{
    
    res.writeHead(200,
        {'content-type': 'application/json'})
    fs.readFile('meals.json',(err,data)=>{
        if(err){
            res.write('error')
        }else{
            const ranIndex = data[Math.floor(Math.random()*data.length)]
            res.write(ranIndex)
        }
        res.end()
    })   
};

module.exports = mealRouter;
