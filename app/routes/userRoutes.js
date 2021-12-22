const {response} = require("express");
const userController = require('../controllers/userController')




module.exports = application => {
    application.get('/user', (request, response, next) => {
        userController.getUser(request, application, response)
    })
}
