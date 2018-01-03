const moment = require('moment');
const serverTime = moment().format('YYYY-MM-DD');
const SALT = '$%#^$^&';
module.exports = {
		SALT,
		serverTime,
};