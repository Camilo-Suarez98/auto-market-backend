const router = require('express').Router()

const {
  getCarImageContoller,
  createCarImageController,
  deleteCarImageController
} = require('./carImages.controller')

router.route('/').get(getCarImageContoller)
router.route('/').post(createCarImageController)

router.route('/:id').delete(deleteCarImageController)

module.exports = router