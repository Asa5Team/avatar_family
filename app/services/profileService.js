const validateUtil = require('../utils/validateUtil')
const userService = require('./userService')
const {ProfileRepository} = require("../repository");
const {CustomError} = require("../errors/CustomError");

const createProfile = async (profileData) => {
    const user = await userService.findUserById(profileData.id)

    if (validateUtil.valueFound(user)) {
        console.log(`Profile ${profileData.id} existis`)
        return await ProfileRepository.saveItem(profileData)
    } else {
        console.log(`User ${profileData.id} not exists`)
        throw new CustomError('USR-0001', `Error on ${createProfile.name}`)
    }
}


const updateProfile = async (id, profileData) => {
    const profileResult = await ProfileRepository.findByKey('id', id)

    if (validateUtil.valueFound(profileResult)) {
        return await ProfileRepository.update(id, profileData)
    } else {
        console.log('Profile not found on update')
        throw new CustomError('PRF-0001', `Error on ${updateProfile.name}`)
    }
}


const findProfileById = async (id) => {
    try {
        console.info(`Find profile by id: ${JSON.stringify(id)}`)

        const profileResult = await ProfileRepository.findByKey('id', id)
        if (!validateUtil.valueFound(profileResult)) {
            throw new CustomError('PRF-0001', `Error on ${findProfileById.name}`)
        }

        return profileResult[0]
    } catch (error) {
        console.log(`Erro when find profile by id: ${JSON.stringify(error)}`)

        if (error instanceof CustomError) {
            throw error
        }

        throw new CustomError('PRF-0001', `Error on ${findProfileById.name}`)
    }
}


/**
 * @deprecated
 * @description Excluir função
 */
const getProfile = async () => {
    return await ProfileRepository.findAll()
}


module.exports = {
    createProfile,
    findProfileById,
    updateProfile,
    getProfile
}