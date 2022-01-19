// const {User} = require("../app/models/User");
const dateUtil = require('../app/util/dateUtil')
const uuid = require('uuid')
const emailUtil = require('../app/util/emailUtil')

const userService = require('../app/services/userService')

const UserRepository = require('../app/repository/UserRepository')




const idUserOwnerProfile = "b5bec2b1-1b9e-4751-b44a-e7954776cfe5"
const requestingUserId = "47008668-7c94-4ab6-8dc0-7fbd318154e8"
async function checkUsersRequestAccessExist(idUserOwnerProfile, requestingUserId){
    const result = await UserRepository.checkUsersRequestAccessExists(idUserOwnerProfile, requestingUserId)
    console.log(result.length)
}

async function getAllUsers(){
    const result = await UserRepository.findAll()
    console.log(result)
}

checkUsersRequestAccessExist(idUserOwnerProfile, requestingUserId)
// getAllUsers()





