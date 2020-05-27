const router = require('express').Router()
const contactController = require('../controllers/contact')


router.post('/contact', contactController.submitContact)
router.get('/delete/:id', contactController.deleteContact)

module.exports = router;