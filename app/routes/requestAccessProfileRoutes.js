const {requestAccessProfileController} = require('../controllers/')

module.exports = application => {

    application.post('/request-access/:idUserOwnerProfile/:requestingUserId', (request, response, next) =>{
        requestAccessProfileController.userRequestAccessProfile(request, application, response)
    })

    application.get('/request-access/owner/:idUserOwnerProfile', (request, response, next) =>{
        requestAccessProfileController.getRequestAccessFromUser(request, application, response)
    })

    // application.get('/user/request-access-requester/:requestingUserId', (request, response, next) =>{
    //     requestAccessProfileController.getRequestAccessFromUser(request, application, response)
    // })

}
