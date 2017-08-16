const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const {serverTime}=require('../lib/const');
const debug = require('debug')('logger');
const fileStreamRotator = require('file-stream-rotator');

//日志存放目录
const logger_DIR = path.resolve(__dirname,`../logs/${serverTime}`);
debugger
//不存在则创建
fs.existsSync(logger_DIR) || fs.mkdirSync(logger_DIR);

const accessLogStream = fileStreamRotator.getStream({
    date_format:"YYYY-MM-DD",       //日期格式
    filename:path.resolve(logger_DIR,'messages-%DATE%.log'),     //文件名
    frequency:"daliy",     //频率---日常
    verbose:false           //很长的日志
});
const _morgan = morgan('combined',{stream:accessLogStream});
module.exports = _morgan;