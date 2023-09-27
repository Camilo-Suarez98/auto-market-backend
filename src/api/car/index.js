const router = require('express').Router()

const {
  getAllCarsController,
  getCarByIdController,
  createCarController,
  updateCarController,
  deleteCarController
} = require('./car.controller')

router.route('/').get(getAllCarsController)
router.route('/').post(createCarController)

router.route('/:id').get(getCarByIdController)
router.route('/:id').put(updateCarController)
router.route('/:id').delete(deleteCarController)

module.exports = router