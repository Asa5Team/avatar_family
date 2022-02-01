const {avatarService} = require('../services/')


const getAvatarById = async (request, context, response, next) => {
    try {
        const avatarResult = await avatarService.findAvatarById(request.params.id)
        response.status(200).json(avatarResult)
    } catch (error) {
        console.log(`Error when get avatar by id: ${error.message}`)
        next(error)
    }
}

const createAvatar = async (request, context, response, next) => {
    try {
        const avatarResult = await avatarService.createAvatar(request.body)
        response.status(201).json(avatarResult)
    } catch (error) {
        console.log(`Error when create avatar: ${error.message}`)
        next(error)
    }
}

const updateAvatar = async (request, context, response, next) => {
    try {
        const avatarResult = await avatarService.updateAvatar(request.params.id, request.body)
        response.status(201).json(avatarResult)
    } catch (error) {
        console.log(`Error when update avatar: ${error.message}`)
        next(error)
    }
}

module.exports = {
    getAvatarById,
    createAvatar,
    updateAvatar
}
