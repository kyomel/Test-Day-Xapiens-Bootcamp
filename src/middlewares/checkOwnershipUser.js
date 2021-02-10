module.exports = (req, res, next) => {
    if (req.user.role === "user") {
        return next()        
    }
    res.status(403).json(
        "you're not allowed to do this!"
    )
}