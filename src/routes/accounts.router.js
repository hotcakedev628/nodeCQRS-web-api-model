const router = require('express').Router()
const {getAccountDetailsById} = require('../controllers/get-account-details')



router.get('/accountDetailsById/:id',  getAccountDetailsById)




module.exports = router