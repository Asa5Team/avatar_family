const userService = require('../services/userService')

const getUser = async (request, context, response, next) => {
    try {
        const userResult = await userService.findUsers(request.query.searchValue)
        response.status(200).json(userResult)
    } catch (error) {
        console.log(`Erro when get user: ${error.message}`)
        next(error)
    }
}

const getUserByEmail = async (request, context, response, next) => {
    try {
        const userResult = await userService.findUserByEmail(request.params.email)
        response.status(200).json(userResult)
    } catch (error) {
        console.log(`Erro when get user by e-mail: ${error.message}`)
        next(error)
    }
}

const getUserById = async (request, context, response, next) => {
    try {
        const userResult = await userService.findUserById(request.params.id)
        response.status(200).json(userResult)
    } catch (error) {
        console.log(`Erro when get user by id: ${error.message}`)
        next(error)
    }
}

const createUser = async (request, context, response, next) => {
    try {
        const userResult = await userService.createNewUser(request.body)
        response.status(201).json(userResult)
    } catch (error) {
        console.log(`Erro when create user: ${error.message}`)
        next(error)
    }
}

const updateUser = async (request, context, response, next) => {
    try {
        const userResult = await userService.updateUser(request.params.id, request.body)
        response.status(201).json(userResult)
    } catch (error) {
        console.log(`Erro when update user: ${error.message}`)
        next(error)
    }
}

module.exports = {
    getUser,
    getUserByEmail,
    getUserById,
    createUser,
    updateUser
}
