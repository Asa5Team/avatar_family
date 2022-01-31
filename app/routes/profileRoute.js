const {profileController} = require('../controllers/')
// const userSchema = require('../../loaders/schemas/userSchema')
// const {validateSchema} = require('../middlewares/validateSchema')

module.exports = application => {

    application.get('/profile', (request, response, next) => {
        profileController.getProfile(request, application, response, next)
    })

    application.get('/profile/:id', (request, response, next) => {
        profileController.getProfileById(request, application, response, next)
    })
    //
    application.post('/profile',  (request, response, next) => {
        profileController.createProfile(request, application, response, next)
    })

    application.put('/profile/:id',  (request, response, next) => {
        profileController.updateProfile(request, application, response, next)
    })
}