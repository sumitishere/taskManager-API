const express = require('express');
const User = require('../models/User')
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('User routes are working');
});

//user register
//user login

module.exports = router

