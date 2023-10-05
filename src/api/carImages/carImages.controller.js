const {
  getImage,
  createImage,
  deleteImage
} = require('./carImages.service')

const { createCar } = require('../car/car.service')
const cloudinary = require('cloudinary').v2

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
    const { url, car } = req.body

    const newCar = await createCar(car)
    const carId = newCar._id

    const result = await cloudinary.uploader.upload(url);

    const newImageUrl = {
      url: result.secure_url,
      car: carId,
    }

    const newImage = await createImage(newImageUrl)
    res.status(201).json({ message: "Image created succesfully", data: newImage })
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