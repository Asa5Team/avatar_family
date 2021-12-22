const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const consign = require('consign')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

consign({cwd: 'app'})
    .include('controllers')
    .then('models')
    .then('routes')
    .into(app)

app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
})


module.exports = app
