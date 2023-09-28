const router = require('express').Router()

const {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require('./user.controller')

router.route('/').get(getAllUsersHandler)
router.route('/').post(createUserHandler)

router.route('/:id').get(getUserByIdHandler)
router.route('/:id').put(updateUserHandler)
router.route('/:id').delete(deleteUserHandler)

module.exports = router