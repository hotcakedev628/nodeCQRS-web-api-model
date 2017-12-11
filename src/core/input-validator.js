const Joi = require('joi')

const accountIdSchema = Joi.string().min(10).max(70).required()

module.exports = {
     

     updateAccountAddressSchema(req, res, next) {
        req.schema = Joi.object().keys({
            accountId: accountIdSchema,
            postcode: Joi.number().min(10000).max(99999).required(),
        })
        validateSchema(req, res, next)
    },
}


function validateSchema(req, res, next) {
    Joi.validate(req.body, req.schema, (err, value) => {
        if (err) return res.status(422).json(err)
        else next()
    });
}


