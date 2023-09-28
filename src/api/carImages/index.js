const router = require('express').Router()

const {
  getCarImageHandler,
  createCarImageHandler,
  deleteCarImageHandler
} = require('./carImages.controller')

router.route('/').get(getCarImageHandler)
router.route('/').post(createCarImageHandler)

router.route('/:id').delete(deleteCarImageHandler)

module.exports = router