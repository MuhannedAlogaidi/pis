const express = require('express');
const app = express(); // This is a top level function 

// Middleware section

app.use((req,res,next)=>{
    console.log(req)
});

app.listen(3000)

