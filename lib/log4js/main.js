const log4js = require('log4js');
const path = require('path');
const sDate = require('silly-datetime');
const time=sDate.format(new Date(), 'YYYY-MM-DD');
console.log(`./logs/${time}/log_http`);

log4js.configure({
    'appenders': {
        console: { type: 'console' },
        http: {
            "type": "dateFile",
            "filename": `./logs/${time}/log_http`,
            "maxLogSize": 204800,
            "pattern": '-yyyy-MM-dd.log',
            "alwaysIncludePattern": true,
            "backups": 10,
        },
        httpError: {
            "type": "dateFile",
            "filename": `./logs/${time}/log_error`,
            "maxLogSize": 204800,
            "pattern": '-yyyy-MM-dd.log',
            "alwaysIncludePattern": true,
            "backups": 10,
        }
    },
    categories: {
        default: {appenders: [ 'console'], level: 'debug'},
        http: {appenders: ['http'], level: 'ALL'},
        error: {appenders: ['httpError'], level: 'ALL'}

    },
    "replaceConsole": false,

});
var HTTP_logger = log4js.getLogger('http');
var ERROR_logger = log4js.getLogger('error');
module.exports = {
    log4js,
    HTTP_logger,
    ERROR_logger
};