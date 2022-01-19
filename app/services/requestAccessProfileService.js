const userService = require('./userService')
const RequestAccessProfileRepository = require('../repository/RequestAccessProfileRepository')
const {NotFoundError} = require("../errors/NotFoundError");

const userRequestAccessProfile = async (idUserOwnerProfile, requestingUserId) => {
    if (await hasRequestUsers(idUserOwnerProfile, requestingUserId)) {
        const accessRequestResult = await RequestAccessProfileRepository.findAccessRequest(idUserOwnerProfile, requestingUserId)

        if (accessRequestResult.length > 0) {
            console.log(`Request access already registered`)
            throw new Error('Request access already registered')
        }

        const requestAccessItem = {
            idUserOwnerProfile: idUserOwnerProfile,
            requestingUserId: requestingUserId
        }

        return await RequestAccessProfileRepository.saveItem(requestAccessItem)
    } else {
        console.log('User(s) not found to create request')
        throw new NotFoundError('User')
    }
}

const getRequestAccessFromUser = async (id) => {
    const requestResult = await RequestAccessProfileRepository.findByKey('idUserOwnerProfile', id)

    if (requestResult.length > 0) {
        return requestResult
    } else {
        throw new NotFoundError('Request access')
    }
}

const approveRequest = (idUserOwnerProfile, requestingUserId) => {
    // get request access register
    // set id requester to allow list user
}

const hasRequestUsers = async (idUserOwnerProfile, requestingUserId) => {
    const userOwner = await userService.findUserById(idUserOwnerProfile)
    const userRequester = await userService.findUserById(requestingUserId)

    return userOwner.length > 0 && userRequester.length > 0 ? true : false
}

module.exports = {
    userRequestAccessProfile,
    getRequestAccessFromUser,
    hasRequestUsers
}