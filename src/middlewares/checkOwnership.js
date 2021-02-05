const models = require('../db/models')
module.exports = modelName => {
    const Model = models[modelName];

    return async function (req, res, next) {
        try {
            let instance = await Model.findByPk(req.params.id)
            if (instance.user_id !== req.user.id) {
                throw new Error(`This is not your ${modelName}`)
            }
            next();
        }
        catch (err) {
            res.status(403).json({
                status: 'Failed',
                message: err.message
            })
        }
    }
}