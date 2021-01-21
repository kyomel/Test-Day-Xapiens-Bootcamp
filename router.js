let express = require("express")
let router = new express.Router();
let logger = require("./logger").Logger;


router.use(function timeLog(req, res, next){
    logger.info("Test Message");
    next();
});



router.get("/", function(req, res){
    res.send("Home Page");
});


module.exports = router;