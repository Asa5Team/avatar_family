const validateUtil = require('../utils/validateUtil')
const {AvatarRepository} = require("../repository");
const {CustomError} = require("../errors/CustomError");

const createAvatar = async (avatarData) => {
    console.log(`Create avatar ${avatarData}`)

    try {
        return await AvatarRepository.saveItem(avatarData)
    } catch (error) {
        console.log(`Error when create avatar register: ${error.message}`)
        throw new CustomError('AVA-0001', `Error on ${createAvatar.name}`)
    }
}


const updateAvatar = async (id, avatarData) => {
    console.log(`Update avatar ${avatarData}`)
    const avatarResult = await AvatarRepository.findByKey('id', id)

    if (!validateUtil.valueFound(avatarResult)) {
        console.log('Avatar not found on update')
        throw new CustomError('AVA-0002', `Error on ${updateAvatar.name}`)
    }

    try {
        return await AvatarRepository.update(id, avatarData)
    } catch (error) {
        console.log(`Error when update avatar data: ${error.message}`)
        throw new CustomError('AVA-0003', `Error on ${updateAvatar.name}`)
    }
}


const findAvatarById = async (id) => {
    try {
        console.info(`Find avatar by id: ${id}`)

        const avatarResult = await AvatarRepository.findByKey('id', id)
        if (!validateUtil.valueFound(avatarResult)) {
            throw new CustomError('AVA-0002', `Error on ${findAvatarById.name}`)
        }

        return avatarResult[0]
    } catch (error) {
        console.log(`Erro when find profile by id: ${JSON.stringify(error)}`)
        if (error instanceof CustomError) {
            throw error
        }

        throw new CustomError('AVA-0004', `Error on ${findAvatarById.name}`)
    }
}


module.exports = {
    createAvatar,
    findAvatarById,
    updateAvatar
}