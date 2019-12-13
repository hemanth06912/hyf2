const express = require('express');

const router = express();

// create the middleware:
// app.use('/numbers',router);

// creating routes:

// Adding:
router.get('/numbers/add', (req,res)=>{
    // const {first,second} = req.query;
    // console.log(req.query);
    // const sum = parseInt(first) + parseInt(second);
    // res.send(`sum = ${sum}`);
    
    const numberQuery = req.query;
    const querySum = parseInt(numberQuery.first) + parseInt(numberQuery.second);

    res.send(`sum =${querySum}`);
});

// Multiplying:
router.get('/numbers/multiply', (req,res)=>{
    const numberQuery = req.query;
    const queryMul = parseInt(numberQuery.first)*parseInt(numberQuery.second);
    console.log(queryMul);
    res.send(`${queryMul}`);
});

// create port:
const port = 3000;

router.listen(port,()=>
console.log(`server started on port: ${port}`))