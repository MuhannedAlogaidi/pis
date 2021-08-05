const express = require('express');
const bodyparser = require('body-parser');

const app = express(); // This is a top level function 

const adminRouter = require('./routes/admin');
const cardRouter= require('./routes/card');
const homeRouter= require('./routes/home');

app.use(bodyparser.urlencoded({ extended: false }));
// Middleware section
app.use(adminRouter);
app.use(cardRouter);
app.use(homeRouter);

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found</h1>")
});



app.listen(3000);

