const { signToken, verifyToken } = require('../../auth/auth.service')
const {
  getUsers,
  getUserById,
  getUserByEmail,
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
    const token = req.headers.authorization.split(' ')[1];
    const checkUser = verifyToken(token);
    const user = req.user

    if (!checkUser) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const findUser = await getUserById(user.id);

    if (findUser) {
      return res.status(200).json({ message: 'User found', data: findUser });
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error showing this user', error: error.message })
  }
}

const createUserHandler = async (req, res) => {
  try {
    const { firstName, lastName, email, profileImage, phone, password } = req.body

    const checkUser = await getUserByEmail(email)

    if (checkUser) {
      return res.status(400).json({ message: "Email already exists" })
    }

    const newUser = {
      firstName,
      lastName,
      email,
      profileImage,
      phone,
      password
    }

    const user = await createUser(newUser)

    const payload = {
      id: user.id,
      email: user.email
    }

    const token = signToken(payload)

    const profile = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }

    res.status(201).json({ message: "User created succesfully", token, profile })
  } catch (error) {
    res.status(401).json({ message: "User couldn't be created", data: error.message })
  }
}

const updateUserHandler = async (req, res) => {
  try {
    const { id } = req.user
    const data = req.body

    const user = await getUserById(id)

    if (!user) {
      return res.json(404).json({ message: 'User not found' })
    }

    const updateInfo = await updateUser(id, data)
    res.status(200).json({ message: 'User updated', data: updateInfo })
  } catch (error) {
    res.status(400).json({ message: "User couldn't be updated", data: error.message })
  }
}

const updateProfileImageHandler = async (req, res) => {
  try {
    const token = req.headers?.authorization.split(' ')[1]
    const { profileImage } = req.body
    const decoded = verifyToken(token)

    if (!decoded) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = decoded

    const data = {
      profileImage
    }

    const newImage = await updateUser(id, data)
    res.status(201).json({ message: 'Profile image updated successfully', data: newImage });
  } catch (error) {
    res.status(401).json({ message: 'Profile image could not be updated', error: error.message });
  }
}

const deleteUserHandler = async (req, res) => {
  try {
    const { id } = req.user

    const user = await getUserById(id)

    if (!user) {
      return res.json(404).json({ message: 'User not found' })
    }

    const deleteSingleUser = await deleteUser(id)
    res.status(200).json({ message: 'User deleted', data: deleteSingleUser })
  } catch (error) {
    res.status(404).json({ message: 'Error to delete this user', error: error.message })
  }
}

module.exports = {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  updateProfileImageHandler,
  deleteUserHandler
}