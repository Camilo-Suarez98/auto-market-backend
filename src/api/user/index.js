const router = require('express').Router()

const {
  createUserController
} = require('./user.controller')

router.route('/').post(createUserController)

module.exports = router