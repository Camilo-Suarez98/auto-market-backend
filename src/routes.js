const userRouter = require('./api/user')
const carRouter = require('./api/car')
const carImageRouter = require('./api/carImages')
const loginRouter = require('./auth/local')

const routes = (app) => {
  app.use('/api/users', userRouter)
  app.use('/api/cars', carRouter)
  app.use('/api/car-images', carImageRouter)

  app.use('/auth/local', loginRouter)
}

module.exports = routes