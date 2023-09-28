const {
  getImage,
  createImage,
  deleteImage
} = require('./carImages.service')

const Car = require('../car/car.model')

const getCarImageHandler = async (_, res) => {
  try {
    const images = await getImage()
    res.status(200).json({ message: 'Images found succesfully', data: images })
  } catch (error) {
    res.status(400).json({ message: 'Error to find images', data: error.message })
  }
}

const createCarImageHandler = async (req, res) => {
  try {
    const { authorization: carId } = req.headers
    const { url } = req.body

    const checkCar = await Car.findById(carId)

    if (!checkCar) {
      throw new Error('Car not found')
    }

    const newImageUrl = {
      url
    }

    const newImage = await createImage(newImageUrl)
    checkCar.carImages.unshift(newImage)
    await checkCar.save({ validateBeforeSave: false })
    res.status(201).json({ message: "Image created succesfully", data: newImageUrl })
  } catch (error) {
    res.status(401).json({ message: "Image couldn't be created", data: error.message })
  }
}

const deleteCarImageHandler = async (req, res) => {
  try {
    const { id } = req.params

    const deleteCarSingleImage = await deleteImage(id)
    res.status(200).json({ message: "Image deleted succesfully", data: deleteCarSingleImage })
  } catch (error) {

    res.status(400).json({ message: "Error to delete this image", data: error.message })
  }
}

module.exports = {
  getCarImageHandler,
  createCarImageHandler,
  deleteCarImageHandler
}