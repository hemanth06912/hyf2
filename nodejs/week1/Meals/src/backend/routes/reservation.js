const fs = require('fs');

const reservationRouter = (req,res)=>{
    
    res.writeHead(200,
        {'content-type': 'application/json'})
    fs.readFile('reservations.json',(err,data)=>{
        if(err){
            res.write('error')
        }else{
            const ranIndex = data[Math.floor(Math.random()*data.length)]
            res.write(ranIndex)
        }
        res.end()
    })   
};

module.exports = reservationRouter;
