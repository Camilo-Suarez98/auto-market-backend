const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET_KEY

const verifyToken = (token) => {
  const decoded = jwt.verify(token, SECRET)
  return decoded
}

const signToken = (payload) => {
  const token = jwt.sign(payload, SECRET, { expiresIn: '1d' })

  return token
}

module.exports = {
  verifyToken,
  signToken
}