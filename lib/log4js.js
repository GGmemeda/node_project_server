const log4js = require('log4js');
const path = require('path');
const {serverTime} = require('./constant.js');
console.log(`./logs/${serverTime}/log_http`);

log4js.configure({
		'appenders': {
				console: {type: 'console'},
				http: {
						'type': 'dateFile',
						'filename': `./logs/${serverTime}/http`,
						'maxLogSize': 204800,
						'pattern': '.log',
						'alwaysIncludePattern': true,
						'backups': 10,
				},
				httpError: {
						'type': 'dateFile',
						'filename': `./logs/${serverTime}/error`,
						'maxLogSize': 204800,
						'pattern': '.log',
						'alwaysIncludePattern': true,
						'backups': 10,
				}
		},
		categories: {
				default: {appenders: ['console'], level: 'debug'},
				http: {appenders: ['http'], level: 'ALL'},
				error: {appenders: ['httpError'], level: 'ALL'}

		},
		'replaceConsole': false,

});
const HTTP_logger = log4js.getLogger('http');
const ERROR_logger = log4js.getLogger('error');
module.exports = {
		log4js,
		HTTP_logger,
		ERROR_logger
};