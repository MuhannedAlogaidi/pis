const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add-card',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','admin.html'));
});

module.exports = router;