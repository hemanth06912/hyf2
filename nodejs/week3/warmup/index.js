const express = require('express');
const app = express();
const port = 6000;


// request by params:
// section1:

// Addition:
app.get('/calculator/add/:firstParam&:secondParam', (req, res) => {
    const firstParam = parseInt(req.params.firstParam);
    const secondParam = parseInt(req.params.secondParam);
    res.send(`solution:${firstParam + secondParam}`);
});

// Subtraction:
app.get('/calculator/subtract/:firstParam&:secondParam', (req, res) => {
    const firstParam = parseInt(req.params.firstParam);
    const secondParam = parseInt(req.params.secondParam);
    res.send(`solution:${firstParam - secondParam}`);
});

// Multiply:
app.get('/calculator/multiply/:firstParam&:secondParam', (req, res) => {
    const firstParam = parseInt(req.params.firstParam);
    const secondParam = parseInt(req.params.secondParam);
    res.send(`solution:${firstParam * secondParam}`);
});

// Division:
app.get('/calculator/division/:firstParam&:secondParam', (req, res) => {
    const firstParam = parseInt(req.params.firstParam);
    const secondParam = parseInt(req.params.secondParam);
    console.log(secondParam);
    res.send(`solution:${firstParam / secondParam}`);
});


// request by body:
// section2:

// Addition:
app.get('/calculator/add/:firstParam&:secondParam', (req, res) => {
    const firstParam = parseInt(req.body.firstParam);
    const secondParam = parseInt(req.body.secondParam);
    res.send(`solution:${firstParam + secondParam}`);
});

// Subtraction:
app.get('/calculator/subtract/:firstParam&:secondParam', (req, res) => {
    const firstParam = parseInt(req.body.firstParam);
    const secondParam = parseInt(req.body.secondParam);
    res.send(`solution:${firstParam - secondParam}`);
});

// Multiply:
app.get('/calculator/multiply/:firstParam&:secondParam', (req, res) => {
    const firstParam = parseInt(req.body.firstParam);
    const secondParam = parseInt(req.body.secondParam);
    res.send(`solution:${firstParam * secondParam}`);
});

// Division:
app.get('/calculator/division/:firstParam&:secondParam', (req, res) => {
    const firstParam = parseInt(req.body.firstParam);
    const secondParam = parseInt(req.body.secondParam);
    console.log(secondParam);
    res.send(`solution:${firstParam / secondParam}`);
});
app.listen(port, () => `server started on port:${port}`);