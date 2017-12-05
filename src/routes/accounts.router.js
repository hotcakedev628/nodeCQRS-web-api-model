const router = require('express').Router()
const { createAccount, deleteAccount, reinstateAccount, updateAccountAddress, approveAccount } = require('../controllers/users.ctrl')
const Validate = require('../core/input-validator')



router.post('/approveAccount', Validate.approveAccountShema, approveAccount)
router.post('/createAccount', Validate.createAccountShema, createAccount)
router.post('/deleteAccount', Validate.deleteAccountShema, deleteAccount)
router.post('/reinstateAccount', Validate.reinstateAccountShema, reinstateAccount)
router.post('/updateAccountAddress', Validate.updateAccountAddressShema, updateAccountAddress)




module.exports = router