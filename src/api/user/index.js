const router = require('express').Router()
const { isAuthenticated } = require('../../auth/auth.controller')
const { formData } = require('../../middlewares/formData')

const {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  updateProfileImageHandler,
  deleteUserHandler,
} = require('./user.controller')

router.route('/').get(getAllUsersHandler)
router.route('/').post(createUserHandler)

router.route('/single').get(isAuthenticated, getUserByIdHandler)
router.route('/info').put(isAuthenticated, updateUserHandler)
router.route('/profile-image').put(isAuthenticated, formData, updateProfileImageHandler)
router.route('/:id').delete(isAuthenticated, deleteUserHandler)

module.exports = router