const {profileService} = require('../services/')

/**
 * @TODO
 * Remove function getProfile
 */

const getProfile = async (request, context, response, next) => {
    return await profileService.getProfile()
}

const getProfileById = async (request, context, response, next) => {
    try {
        const profileResult = await profileService.findProfileById(request.params.id)
        response.status(200).json(profileResult)
    } catch (error) {
        console.log(`Error when get profile by id: ${error.message}`)
        next(error)
    }
}

const createProfile = async (request, context, response, next) => {
    try {
        const userResult = await profileService.createProfile(request.body)
        response.status(201).json(userResult)
    } catch (error) {
        console.log(`Error when create profile: ${error.message}`)
        next(error)
    }
}

const updateProfile = async (request, context, response, next) => {
    try {
        const userResult = await profileService.updateProfile(request.params.id, request.body)
        response.status(201).json(userResult)
    } catch (error) {
        console.log(`Error when update profile: ${error.message}`)
        next(error)
    }
}

module.exports = {
    getProfileById,
    createProfile,
    updateProfile,
    getProfile
}
