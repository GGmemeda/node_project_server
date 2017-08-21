const express = require('express');
const router = express.Router();
const fs = require("fs");
const debug = require('debug')('test');


var questions = [
    {
        data: 213,
        num: 444,
        age: 12
    },
    {
        data: 456,
        num: 678,
        age: 13
    }];
router.post('/123', function (req, res,next) {
   try {
       debug(req);
       next();
   }catch (error){
       debug(error);
       next('/123请求失败,失败')
   }
});
router.post('/sss',  (req, res,next) => {
    try {
        console.log(req.body.aa);
        let getData=req.body.aa;
       res.data = Object.assign({},questions,getData);
        debug(req.data);
        next();
    }catch (error){
        debug(error)
        next('/sss请求失败,失败')
    }

});

module.exports=router;