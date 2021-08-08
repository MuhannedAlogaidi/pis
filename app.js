const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express(); // This is a top level function 

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouter = require('./routes/admin');
const cardRouter= require('./routes/card');
const homeRouter= require('./routes/home');

// Global Middleware section
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

// Routing Middleware section
app.use('/admin', adminRouter.routers);
app.use(cardRouter);
app.use(homeRouter);

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found</h1>")
});


app.listen(3000);

