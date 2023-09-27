const router = require('express').Router()

const {
  getAllUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
} = require('./user.controller')

router.route('/').get(getAllUsersController)
router.route('/').post(createUserController)

router.route('/:id').get(getUserByIdController)
router.route('/:id').put(updateUserController)
router.route('/:id').delete(deleteUserController)

module.exports = router