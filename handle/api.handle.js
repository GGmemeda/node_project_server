/**
 * 统一处理response格式
 * 路由发送数据 统一用 res.data = xxx
 */

const {HTTP_logger} = require('../lib/log4js');
const debug = require('debug')('api.handle');

module.exports = function(req,res,next){
    const resData = {
        api:req.originalUrl,       //请求接口
        method:req.method,          //请求方式
        result:{
            code:"SUCCESS",
            message:""
        },
        data:res.data
    };
    HTTP_logger.info(
        Object.assign(
            JSON.stringify(
                {query:req.query,body:req.body},resData
            )
        )
    );
    res.status(200).send(resData.result);

};