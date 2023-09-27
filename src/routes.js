const user = require('./api/user')
const car = require('./api/car')
const carImage = require('./api/carImages')

const routes = (app) => {
  app.use('/api/users', user)
  app.use('/api/cars', car)
  app.use('/api/car-images', carImage)
}

module.exports = routes