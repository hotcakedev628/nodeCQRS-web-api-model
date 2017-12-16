const router = require('express').Router()
const {getAccountDetailsById} = require('../api/get-account-details')



router.get('/accountDetailsById/:id',  getAccountDetailsById)




module.exports = router