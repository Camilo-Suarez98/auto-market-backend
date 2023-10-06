const router = require('express').Router()
const { formData } = require('../../middlewares/formData')

const {
  getCarImageHandler,
  createCarImageHandler,
  deleteCarImageHandler
} = require('./carImages.controller')

router.route('/').get(getCarImageHandler)
router.route('/').post(formData, createCarImageHandler)

router.route('/:id').delete(deleteCarImageHandler)

module.exports = router