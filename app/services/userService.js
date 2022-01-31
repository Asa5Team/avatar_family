const emailUtil = require('../utils/emailUtil');
const UserRespository = require('../repository/UserRepository');
const {CustomError} = require("../errors/CustomError");
const {UserRepository} = require("../repository");
const validateUtil = require("../utils/validateUtil");

const createNewUser = async (userData) => {
    console.info(`create new User: ${JSON.stringify(userData)}`)
    try {
        return await UserRespository.saveItem(userData)
    } catch (error) {
        console.error(`Error on create user: ${error.message}`)
        throw new CustomError('USR-0001', `Error on ${createNewUser.name}`)
    }
}

const updateUser = async (id, userData) => {
    console.log('updateUser')
    const userResult = await UserRespository.findByKey('id', id)

    if (validateUtil.valueFound(userResult)) {
        return await UserRepository.update(id, userData)
    } else {
        console.log('User not found on update')
        throw new CustomError('USR-0001', `Error on ${updateUser.name}`)
    }
}

const findUserByEmail = async (email) => {
    if (emailUtil.isValidEmail(email)) {
        const userResult = await UserRespository.findByKey('email', email)

        if (!validateUtil.valueFound(userResult)) {
            throw new CustomError('USR-0001', `Error on ${findUserByEmail.name}`)
        }

        return userResult
    } else {
        throw new CustomError('USR-0002', `Error on ${findUserByEmail.name}`)
    }
}

const findUserById = async (id) => {
    try {
        console.info(`Find user by id: ${JSON.stringify(id)}`)

        const userResult = await UserRespository.findByKey('id', id)
        if (!validateUtil.valueFound(userResult)) {
            throw new CustomError('USR-0001', `Error on ${findUserByEmail.name}`)
        }

        return userResult[0]
    } catch (error) {
        console.error(`Error when find user by id: ${error.message}`)
        throw new CustomError('USR-0001', `Error on ${findUserByEmail.name}`)
    }
}

module.exports = {
    createNewUser,
    findUserByEmail,
    findUserById,
    updateUser
}