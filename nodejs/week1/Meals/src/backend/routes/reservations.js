const fs = require('fs');

const reservationsRouter = (req,res)=>{
    
    res.writeHead(200,
        {'content-type': 'application/json'})
    fs.readFile('reservations.json',(err,data)=>{
        if(err){
            res.write('error')
        }else{
            res.write(data)
        }
        res.end()
    })   
};

module.exports = reservationsRouter;