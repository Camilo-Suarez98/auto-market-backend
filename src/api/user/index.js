const router = require('express').Router()
const { isAuthenticated } = require('../../auth/auth.controller')

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
router.route('/info').put(isAuthenticated, updateUserHandler)
router.route('/:id').delete(isAuthenticated, deleteUserHandler)

module.exports = router