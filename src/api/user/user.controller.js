const User = require('./user.model')

const createUserController = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body
    const newUser = {
      firstName,
      lastName,
      email,
      password
    }

    const user = await User.create(newUser)
    res.status(201).json({ message: "User created succesfully", data: user })
  } catch (error) {
    res.status(401).json({ message: "User couldn't be created", data: error.message })
  }
}

module.exports = {
  createUserController
}