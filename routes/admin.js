const express = require('express');

const router = express.Router();

router.get('/add-card',(req,res,next)=>{
    res.send('<form action="/card" method="POST"><input type="text" name="card-name"><button type="submit">Add Card</button></form>');
});

module.exports = router;