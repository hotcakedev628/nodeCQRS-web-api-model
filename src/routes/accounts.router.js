const router = require('express').Router()
const commander = require('../controllers/commander')
const queryProcessor = require('../controllers/query-processor')
const Validate = require('../core/input-validator')



router.post('/approveAccount', Validate.approveAccountSchema, commander.approveAccount)
router.post('/createAccount', Validate.createAccountSchema, commander.createAccount)
router.post('/deleteAccount', Validate.deleteAccountSchema, commander.deleteAccount)
router.post('/reinstateAccount', Validate.reinstateAccountSchema, commander.reinstateAccount)
router.post('/updateAccountAddress', Validate.updateAccountAddressSchema, commander.updateAccountAddress)

router.get('/accountDetailsById/:id',  queryProcessor.getAccountDetailsById)




module.exports = router