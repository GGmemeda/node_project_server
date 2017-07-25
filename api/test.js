module.exports=function out(app) {
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
    app.use('/123',function (req, res) {
        res.send(JSON.stringify(questions));
    });
    app.use('/sss',function (req, res) {
        console.log(req.body.aa);
        res.send(JSON.stringify(questions+'1111111'));
    });
};