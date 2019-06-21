const express = require('express');
const router = express.Router();

router.get('/teachers/add', (req,res)=>{
    res.render('teachers/new-teacher');
});

router.get('/teacher', (req,res)=>{
    res.send('Teachers for database');
});


module.exports = router;