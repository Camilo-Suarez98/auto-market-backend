const router = require('express').Router()

const {
  getAllCarsHandler,
  getCarByIdHandler,
  createCarHandler,
  updateCarHandler,
  deleteCarHandler
} = require('./car.controller')

router.route('/').get(getAllCarsHandler)
router.route('/').post(createCarHandler)

router.route('/:id').get(getCarByIdHandler)
router.route('/:id').put(updateCarHandler)
router.route('/:id').delete(deleteCarHandler)

module.exports = router