const express = require('express');
const app = express(); // This is a top level function 

// Middleware section

app.use((req,res,next)=>{
    console.log('First middleware');
    next(); // Allow middleware to continue to next middleware
});

app.use((req,res,next)=>{
    console.log('Second middleware');
    res.send('<h3>Hello PIS Users</h3>')
});

app.listen(3000)

