const express = require('express');
const app = express();
const http = require("http").createServer(app);
const router=express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const debug = require('debug')('server');
const  {PORT}  = require("./config/const.js");
const hostname = '127.0.0.1';

//中间件设置
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//跨域
app.use(cors());
//cookie
app.use(cookieParser())




//接口文件引入
require('./api/test.js')(app);

//端口
app.set('port', process.env.PORT || PORT);
var port=app.get('port');
var server = http.listen(port, function () {

    var host = server.address().address;

    var port = server.address().port;
   console.log('Example app listening at http://%s:%s', host, port);
})