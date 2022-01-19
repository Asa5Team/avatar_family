const {userController} = require('../controllers/')
const userSchema = require('../../loaders/schemas/userSchema')
const {validateSchema} = require('../middlewares/validateSchema')

module.exports = application => {

    application.get('/user', (request, response, next) => {
        userController.getUser(request, application, response)
    })

    application.get('/user/:id', (request, response, next) => {
        userController.getUserById(request, application, response)
    })

    application.post('/user', validateSchema(userSchema.postPutUserSchema.schema, userSchema.postPutUserSchema.name), (request, response, next) => {
        userController.createUser(request, application, response, next)
    })

    application.put('/user/:id', validateSchema(userSchema.postPutUserSchema.schema, userSchema.postPutUserSchema.name), (request, response,next) => {
        userController.updateUser(request, application, response, next)
    })

}
