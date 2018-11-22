module.exports = function(req, res,next) {
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTION,PUT,PATCH,DELETE')
    res.header('Access-Control-Allow-Header','Origin,X-Requested-With,Content-Type,Accept')
    next()
}