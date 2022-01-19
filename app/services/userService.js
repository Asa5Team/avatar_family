const emailUtil = require('../util/emailUtil')
const UserRespository = require('../repository/UserRepository')
const {InvalidField} = require("../errors/InvalidFieldError");
const {NotFoundError} = require("../errors/NotFoundError");
const {UserRepository} = require("../repository");

const createNewUser = async (userData) => {
    return await UserRespository.saveItem(userData)
}

const updateUser = async (id, userData) => {
    console.log('updateUser')
    const userResult = await UserRespository.findByKey('id', id)
    if (isUserFound(userResult)) {
        return await UserRepository.update(id, userData)
    } else {
        console.log('User not found on update')
        throw new NotFoundError('User')
    }
}

const findUserByEmail = async (email) => {
    if (emailUtil.isValidEmail(email)) {
        const userResult = await UserRespository.findByKey('email', email)

        if (isUserFound(userResult)) {
            return userResult
        }

        throw new NotFoundError('User')
    } else {
        throw new InvalidField('E-mail')
    }
}

const findUserById = async (id) => {
    return await UserRespository.findByKey('id', id)
}

const findUsers = async (searchValue) => {
    if (searchValue || searchValue.length > 0) {
        let key = emailUtil.isValidEmail(searchValue) ? 'email' : 'nick'
        return await UserRepository.findByKey(key, searchValue)
    } else {
        return await UserRepository.findAll()
    }
}

const isUserFound = (user) => {
    return user.length > 0 ? true : false
}


module.exports = {
    createNewUser,
    findUserByEmail,
    findUsers,
    findUserById,
    updateUser,
}