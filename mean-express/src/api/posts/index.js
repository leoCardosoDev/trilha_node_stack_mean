const { Router } = require('express')
const router = Router()

router.post('/', require('./post_create_post'))

module.exports = router