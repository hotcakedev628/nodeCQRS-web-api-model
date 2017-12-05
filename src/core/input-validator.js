const Joi = require('joi')

const requiredNameSchema = Joi.string().min(3).max(20).required()
const accountIdSchema = Joi.string().min(10).max(70).required()
const addressLineSchema = Joi.string().min(5).max(70).required()
const placeShema = Joi.string().min(3).max(35).required()

class InputValidator {
    static approveAccountSchema(req, res, next) {
        req.schema = Joi.object().keys({
            accountId: accountIdSchema,
            approveBy: requiredNameSchema,
        })
        validateSchema(req, res, next)
    }

    static createAccountSchema(req, res, next) {
        req.schema = Joi.object().keys({
            newAccountId: accountIdSchema,
            firstName: requiredNameSchema,
            lastName: requiredNameSchema,
            businessName: requiredNameSchema,
            userEmail: Joi.string().email().required()
        })
        validateSchema(req, res, next)
    }


    static deleteAccountSchema(req, res, next) {
        req.schema = Joi.object().keys({
            accountId: accountIdSchema,
            reason: Joi.string().min(20).max(7000).required(),
        })
        validateSchema(req, res, next)
    }


    static reinstateAccountSchema(req, res, next) {
        req.schema = Joi.object().keys({
            accountId: accountIdSchema,
        })
        validateSchema(req, res, next)
    }


    static updateAccountAdderssSchema(req, res, next) {
        req.schema = Joi.object().keys({
            accountId: accountIdSchema,
            addressLine1: addressLineSchema,
            addressLine2: addressLineSchema,
            postcode: Joi.number().min(10000).max(99999).required(),
            city: placeShema,
            state: placeShema,
            countryName: placeShema
        })
        validateSchema(req, res, next)
    }
}


function validateSchema(req, res, next) {
    Joi.validate(req.body, req.schema, (err, value) => {
        if (err) return res.status(422).json(err)
        else next()
    });
}


module.exports = InputValidator
