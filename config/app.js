const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const consign = require('consign')
const serverless = require('serverless-http')
const logAuditMiddleware = require('../app/middlewares/logAuditMiddleware')
const errorHandler = require("../app/middlewares/errorHandler");

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(logAuditMiddleware.requestAuditLog)


consign({cwd: 'app'})
    .include('controllers')
    .then('middlewares')
    .then('routes')
    .then('services')
    .then('errors')
    .into(app)

app.use(errorHandler.errorHandler)

app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
})


module.exports = serverless(app)
