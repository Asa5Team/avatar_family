const dynamoDb = require('../config/dynamoConfig')

const {UserSchema} = require('../app/database/schemas/UserSchema')
const {User} = require("../app/models/User");
const dateUtil = require('../app/util/dateUtil')


// const showAllTables = () => {
//     // dynamoDb.instance.listTables(params = {}, (erro, data) => {
//     //     console.log(`Tables: ${JSON.stringify(data)}`)
//     // })
//
//     console.log(dynamoDb.instance)
//
//     // dynamoDb.instance
// }
// showAllTables()

const name = "Augusto Santesso"
const email = "augusto.teste@teste.com"
const birhDate = dateUtil.convertDataToYYYYMMDD(new Date(2021, 7, 14))
const contry = "BR"
const nick = "DRAXX"

const createUserTest = async () => {
    let userSchema = new UserSchema()
    userSchema.setUser(new User(email, name, birhDate, contry, nick ))

    console.log(userSchema.getUser())

    try{
        await userSchema.saveItem(userSchema.getUser())

    }catch (error){
        console.log(error)
    }

}


const findAllUsers = async () => {
    let userSchema = new UserSchema()
    userSchema.findAll().then(data => {
        console.log(`Result:  ${JSON.stringify(data)}`)
    }).catch(error => {
        console.log(error)
    })
}


const findById = async () => {
    let userSchema = new UserSchema()
    userSchema.findById("b230f27d-0acc-472d-b511-ad4514ca5283").then(data => {
        console.log(`Result:  ${JSON.stringify(data)}`)
    }).catch(error => {
        console.log(error)
    })
}

//
const findByEmail = async () => {
    let userSchema = new UserSchema()
    userSchema.findbyEmail(email).then(data => {
        console.log(`Result:  ${JSON.stringify(data)}`)
    }).catch(error => {
        console.log(error)
    })
}

// createUserTest()
findAllUsers()
// findById()
// findByEmail()


