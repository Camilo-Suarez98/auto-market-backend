const {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar
} = require('./car.service')

const User = require('../user/user.model')
const { verifyToken } = require('../../auth/auth.service')

const getAllCarsHandler = async (_, res) => {
  try {
    const cars = await getCars()
    res.status(200).json({ message: 'Cars listed', data: cars })
  } catch (error) {
    res.status(400).json({ message: 'Error listing cars', data: error.message })
  }
}

const getCarByIdHandler = async (req, res) => {
  try {
    const { id } = req.params
    const singleCar = await getCarById(id)
    res.status(200).json({ message: 'Cars found succesfully', data: singleCar })
  } catch (error) {
    res.status(400).json({ message: 'Error when searching for the car', data: error.message })
  }
}

const createCarHandler = async (req, res) => {
  try {
    const token = req.headers.authorization
    const { id } = verifyToken(token.split(' ')[1])
    const {
      brand, model, year, km, location, fuel, color, price
    } = req.body


    const user = await User.findById(id)

    if (!user) {
      throw new Error('Unauthorized')
    }

    const newCarInfo = {
      brand,
      model,
      year,
      km,
      location,
      fuel,
      color,
      price,
      user: id
    }

    const newCar = await createCar(newCarInfo)
    user.cars.unshift(newCar)
    await user.save({ validateBeforeSave: false })
    res.status(201).json({ message: "Car created succesfully", data: newCar })
  } catch (error) {
    res.status(401).json({ message: "Error creating car", data: error.message })
  }
}

const updateCarHandler = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const updateInfo = await updateCar(id, data)
    res.status(200).json({ message: "Car updated succesfully", data: updateInfo })
  } catch (error) {
    res.status(400).json({ message: "Car couldn't update", data: error.message })
  }
}

const deleteCarHandler = async (req, res) => {
  try {
    const { id } = req.params

    const deleteSingleCar = await deleteCar(id)
    res.status(200).json({ message: "Car deleted succesfully", data: deleteSingleCar })
  } catch (error) {
    res.status(400).json({ message: "Error to delete this car", data: error.message })
  }
}

module.exports = {
  getAllCarsHandler,
  getCarByIdHandler,
  createCarHandler,
  updateCarHandler,
  deleteCarHandler
}