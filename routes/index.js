const router = require('express').Router()

router.use('/api', require('./toDoRoutes.js'))

module.exports = router