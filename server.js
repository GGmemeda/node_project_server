const express = require('express');
const app = express();
const http = require("http").createServer(app);
const router=express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const debug = require('debug')('server');
const  {PORT}  = require("./handle/const.js");
const hostname = '127.0.0.1';
const {log4js,HTTP_logger} = require('./lib/log4js/main.js');

//log4js日志使用
app.use(
    log4js.connectLogger(
        HTTP_logger,
        { format: ':remote-addr :method :url :status :response-time ms', nolog: '\\.js|\\.html$' }
    )
);


//中间件设置
//路径设置
app.use(express.static(__dirname,'/'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//跨域
app.use(cors());
//cookie
app.use(cookieParser());
//日志
app.use(require('./handle/logger'));


//接口文件引入
require('./api/test.js')(app);

//端口
app.set('port', process.env.PORT || PORT);
let port=app.get('port');
let server = http.listen(port, function () {

    let host = server.address().address;

    let port = server.address().port;
   console.log('Example app listening at http://%s:%s', host, port);
});