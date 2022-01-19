const requestAccessProfileService = require('../services/requestAccessProfileService')

const userRequestAccessProfile = (request, context, response) => {
    requestAccessProfileService.userRequestAccessProfile(request.params.idUserOwnerProfile, request.params.requestingUserId)
        .then(result => response.status(result.status).json(result.message))
        .catch(error => {
            console.log(error)
            response.status(error.status).json({message: error.message})
        })
}

const getRequestAccessFromUser = (request, context, response) => {
    requestAccessProfileService.getRequestAccessFromUser(request.params.idUserOwnerProfile)
        .then(result => response.status(result.status).json(result.message))
        .catch(error => {
            console.log(error)
            response.status(error.status).json({message: error.message})
        })
}

module.exports = {
    userRequestAccessProfile,
    getRequestAccessFromUser
}
