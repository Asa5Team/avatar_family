require('express-async-errors')
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const consign = require('consign')
const serverless = require('serverless-http')
const logAuditMiddleware = require('../app/middlewares/logAuditMiddleware')
const errorHandler = require("../app/middlewares/errorHandler");
const path = require('path')


if (process.env.ENVIRONMENT) {
    console.log(`LOAD ENV: ${process.env.ENVIRONMENT}`)
    dotenv.config({ path: path.resolve(__dirname, `../environments/.${process.env.ENVIRONMENT}`)});
} else {
    dotenv.config();
}


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
    .then('utils')
    .into(app)

app.use(errorHandler.errorHandler)

let server = app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
})

const stop = () => {
    server.close()
}

module.exports = app
module.exports.stop = stop

