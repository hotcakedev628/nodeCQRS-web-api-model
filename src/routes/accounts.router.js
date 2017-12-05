const router = require('express').Router()
const { approveAccount, createAccount, deleteAccount, reinstateAccount, updateAccountAddress } = require('../controllers/accounts.ctrl')
const Validate = require('../core/input-validator')



router.post('/approveAccount', Validate.approveAccountSchema, approveAccount)
router.post('/createAccount', Validate.createAccountSchema, createAccount)
router.post('/deleteAccount', Validate.deleteAccountSchema, deleteAccount)
router.post('/reinstateAccount', Validate.reinstateAccountSchema, reinstateAccount)
router.post('/updateAccountAddress', Validate.updateAccountAddressSchema, updateAccountAddress)




module.exports = router