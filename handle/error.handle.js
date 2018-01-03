const {ERROR_logger} = require('../lib/log4js');

module.exports=function (err, req, res, next) {
    let resultData;
    if (res.headersSent) {
        resultData = {
            api: req.originalUrl,
            method: req.method,
            result: {
                code: 500,
                message: err.message ? err.message : err
            }
        };
        return next(resultData);
    }
    ERROR_logger.info(
        Object.assign(
            JSON.stringify(
                {query: req.query, body: req.body}, resultData
            )
        )
    );
    res.status(err.status || 500);
    res.render('error', {error: err});
};
