const router = require('express').Router()
const contactController = require('../controllers/controller')


router.post('/contact', contactController.submitContact)

module.exports = router;