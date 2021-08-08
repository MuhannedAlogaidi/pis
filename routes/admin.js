const express = require('express');
const path = require('path');

const routers = express.Router();
const cards = [];

// /admin/add-card => GET
routers.get('/add-card', (req, res, next) => {
    res.render('add-card', {
      pageTitle: 'Add card',
      path: '/admin/add-card',
      formsCSS: true,
      cardCSS: true,
      activeAddcard: true
    });
  });
  
  // /admin/add-card => POST
  routers.post('/xcv', (req, res, next) => {
    cards.push({ card_name: req.body.card_name });
    res.redirect('/');
  });
  
 
/* routers.get('/add-card',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','admin.html'));
}); */

exports.routers = routers;
exports.cards = cards;