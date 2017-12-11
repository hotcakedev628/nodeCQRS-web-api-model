const router = require('express').Router()
const queryProcessor = require('../controllers/query-processor')



router.get('/accountDetailsById/:id',  queryProcessor.getAccountDetailsById)




module.exports = router