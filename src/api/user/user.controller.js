const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('./user.service')

const getAllUsersHandler = async (_, res) => {
  try {
    const users = await getUsers()
    res.status(200).json({ message: 'Users listed', data: users })
  } catch (error) {
    res.status(400).json({ message: 'Error listing users', error: error.message })
  }
}

const getUserByIdHandler = async (req, res) => {
  try {
    const { id } = req.params
    const user = await getUserById(id)
    res.status(200).json({ message: 'User listed', data: user })
  } catch (error) {
    res.status(400).json({ message: 'Error showing this user', error: error.message })
  }
}

const createUserHandler = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body

    const newUser = {
      firstName,
      lastName,
      email,
      password
    }

    const user = await createUser(newUser)

    res.status(201).json({ message: "User created succesfully", data: user })
  } catch (error) {
    res.status(401).json({ message: "User couldn't be created", data: error.message })
  }
}

const updateUserHandler = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const updateInfo = await updateUser(id, data)
    res.status(200).json({ message: 'User updated', data: updateInfo })
  } catch (error) {
    res.status(400).json({ message: "User couldn't be updated", data: error.message })
  }
}

const deleteUserHandler = async (req, res) => {
  try {
    const { id } = req.params

    const deleteSingleUser = await deleteUser(id)
    res.status(200).json({ message: 'User deleted', data: deleteSingleUser })
  } catch (error) {
    res.status(400).json({ message: 'Error to delete this user', error: error.message })
  }
}

module.exports = {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler
}