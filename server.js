const express = require('express');
const app = express();
const http = require("http").createServer(app);
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const debug = require('debug')('server');
const  {PORT}  = require("./lib/const.js");
const hostname = '127.0.0.1';
const {log4js,HTTP_logger} = require('./lib/log4js.js');


//log4js日志使用
app.use(
    log4js.connectLogger(
        HTTP_logger,
        { format: ':remote-addr :method :url :status :response-time ms', nolog: '\\.js|\\.html$' }
    )
);


//中间件设置
//路径设置
app.use( 'lib',express.static(`${__dirname}/public`));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//跨域
app.use(cors());
//cookie
app.use(cookieParser());
//日志
//接口处理
app.use('/api',require('./api/test'));


app.use(require('./handle/logger.handle'));

//错误处理
app.use(require('./handle/error.handle'));
//数据传输统一处理
app.use(require('./handle/api.handle'));
//接口文件引入

//端口
app.set('port', process.env.PORT || PORT);
let port=app.get('port');
let server = http.listen(port, function () {

    let host = server.address().address;

    let port = server.address().port;
   console.log('Example app listening at http://%s:%s', host, port);
});