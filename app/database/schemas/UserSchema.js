const {DynamoAccessDB} = require("../DynamoAccessDB");
const {User} = require("../../models/User");

class UserSchema extends DynamoAccessDB {

    constructor() {
        super(userModel)

    }

    setUser(user = User) {
        userModel.schema.email = user.email
        userModel.schema.fullName = user.fullName
        userModel.schema.birthDate = user.birthDate
        userModel.schema.country = user.country
        userModel.schema.nick = user.nick
    }

    getUser() {
        return new User(
            userModel.schema.email,
            userModel.schema.fullName,
            userModel.schema.birthDate,
            userModel.schema.country,
            userModel.schema.nick
        )
    }

    findbyEmail(email) {
        return new Promise((resolve, reject) => {
            this.data.query('email').eq(email).exec((err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

}

const userModel = {
    modelName: 'user',
    schema: {
        email: {
            type: String,
            hashKey: true
        },
        fullName: String,
        birthDate: String,
        country: String,
        nick: String
    }

}


module.exports = {
    UserSchema
}
