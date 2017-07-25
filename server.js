var express = require('express');
var app = express();
var router=express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var debug = require('debug')('app');

app.set('port', process.env.PORT || 3000);

//中间件设置
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//跨域
app.use(cors());
//cookie
app.use(cookieParser())                                //cookie


var questions = [
    {
        data: 213,
        num: 444,
        age: 12
    },
    {
        data: 456,
        num: 678,
        age: 13
    }];

//写个接口123
app.use('/123',function (req, res) {
    console.log(res);
    res.send(JSON.stringify(questions));
});

var server = app.listen(app.get('port'), function () {

    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})