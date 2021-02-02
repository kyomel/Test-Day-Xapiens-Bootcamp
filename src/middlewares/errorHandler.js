module.exports = [
    function(req, res, next) {
        res.status(404);
        next(new Error("Not Found"))
    },
    function (err, req, res, next) {
        console.log(err)
    if(res.statucCode == 200) res.statucCode(500);
    res.json({
        status: "Fail",
        error: [err.message]
    })
}]
