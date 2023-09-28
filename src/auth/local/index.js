const router = require('express').Router()
const { loginHandler } = require('./local.controller')

router.route('/login').post(loginHandler)

module.exports = router