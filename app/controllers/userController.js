const {User} = require("../models/User");

const getUser = (request, context, response) => {
    console.log('User Controller -> Get User')

    const user = new User(10, "Augusto", "14/07/1987", "BR", "Draxx")

    user.checkData()
    response.status(200).json({message: 'Get User'})

}


module.exports = {
    getUser
}
