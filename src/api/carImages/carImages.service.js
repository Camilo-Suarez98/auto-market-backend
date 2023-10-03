const CarImage = require('./carImages.model')

const getImage = async () => {
  try {
    const images = await CarImage.find()
      .populate({
        path: 'car',
        select: ('_id brand model year')
      })
    return images
  } catch (error) {
    throw new Error(error)
  }
}

const createImage = async (data) => {
  try {
    const newImage = await CarImage.create(data)
    return newImage
  } catch (error) {
    throw new Error(error)
  }
}

const deleteImage = async (id) => {
  try {
    const deleteSingleImage = await CarImage.findByIdAndDelete(id)
    return deleteSingleImage
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getImage,
  createImage,
  deleteImage
}