const Car = require('./car.model')

const getCars = async () => {
  try {
    const cars = await Car.find()
      .populate({
        path: 'user',
        select: ('-_id firstName lastName email')
      })
    return cars
  } catch (error) {
    throw new Error(error)
  }
}

const getCarById = async (id) => {
  try {
    const singleCar = await Car.findById(id)
    return singleCar
  } catch (error) {
    throw new Error(error)
  }
}

const createCar = async (data) => {
  try {
    const newCar = await Car.create(data)
    return newCar
  } catch (error) {
    throw new Error(error)
  }
}

const updateCar = async (id, data) => {
  try {
    const updateInfoCar = await Car.findByIdAndUpdate(id, data, { new: true })
    return updateInfoCar
  } catch (error) {
    throw new Error(error)
  }
}

const deleteCar = async (id) => {
  try {
    const deleteSingleCar = await Car.findByIdAndDelete(id)
    return deleteSingleCar
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar
}