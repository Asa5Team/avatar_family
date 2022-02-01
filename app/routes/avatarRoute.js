const {avatarController} = require('../controllers/')

module.exports = application => {

    application.get('/avatar/:id', (request, response, next) => {
        avatarController.getAvatarById(request, application, response, next)
    })


    application.post('/avatar',  (request, response, next) => {
        avatarController.createAvatar(request, application, response, next)
    })


    application.put('/avatar/:id',  (request, response, next) => {
        avatarController.updateAvatar(request, application, response, next)
    })

}