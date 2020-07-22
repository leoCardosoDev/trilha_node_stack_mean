const { Router } = require('express')
const router = Router()

router.get('/', require('./post_list_get'))
router.post('/', require('./post_create_post'))
router.get('/:slug', require('./post_show_get'))

module.exports = router