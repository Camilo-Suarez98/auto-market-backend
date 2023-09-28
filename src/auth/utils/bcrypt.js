const bcrypt = require('bcrypt')

const hashPassword = async (password, factor) => {
  const salt = await bcrypt.genSalt(factor)

  return await bcrypt.hash(password, salt)
}

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

module.exports = {
  hashPassword,
  comparePassword
}