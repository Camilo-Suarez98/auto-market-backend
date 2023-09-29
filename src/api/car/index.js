const router = require('express').Router()
const { isAuthenticated } = require('../../auth/auth.controller')

const {
  getAllCarsHandler,
  getCarByIdHandler,
  createCarHandler,
  updateCarHandler,
  deleteCarHandler
} = require('./car.controller')

router.route('/').get(getAllCarsHandler)
router.route('/').post(isAuthenticated, createCarHandler)

router.route('/:id').get(getCarByIdHandler)
router.route('/:id').put(isAuthenticated, updateCarHandler)
router.route('/:id').delete(isAuthenticated, deleteCarHandler)

module.exports = router