const express = require('express');
const bodyparser = require('body-parser');

const app = express(); // This is a top level function 

app.use(bodyparser.urlencoded({ extended: false }));
// Middleware section

app.use('/add-Card', (req, res, next) => {
    res.send('<form action="/card" method="POST"><input type="text" name="title"><button type="submit">Add Card</button></form>');
});

app.use('/card', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from PIS!</h1>');
});


app.listen(3000);

