require('dotenv').config()
const express = require('express')
const configExpress = require('./config/express')
const connect = require('./config/database')

const app = express()
connect()

configExpress(app)

module.exports = app