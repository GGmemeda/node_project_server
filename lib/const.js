const PORT=3000;
const sDate = require('silly-datetime');
const serverTime=sDate.format(new Date(), 'YYYY-MM-DD');
module.exports={
    PORT,
    serverTime
};