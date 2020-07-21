const { Router } = require('express')
const router = Router()

router.get('/', require('./main_get'))

module.exports = router