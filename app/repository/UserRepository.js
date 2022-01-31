const {DynamoAccessDB} = require("./BaseRepository");
const {USER_STATUS, PROFILE_STATUS} = require('../utils/constants')
const dynamoose = require("dynamoose");
const uuid = require('uuid')

const settingsSchema = {
    timestamps: true,
}

const userModel = {
    tableName: 'user',
    schema: new dynamoose.Schema({
            id: {
                type: String,
                hashKey: true,
                "default": () => uuid.v4(),
            }, email: {
                type: String,
                index: {
                    name: 'emailUserIdx',
                    global: true
                }
            }, userInfo: {
                type: Object,
                schema: {
                    fullName: {
                        type: String,
                        required: true
                    },
                    phoneNumber: String,
                    birthDate: {
                        type: String,
                        required: true
                    },
                    country: {
                        type: String,
                        required: true
                    }
                }
            },
            userStatus: {
                type: String,
                enum: [USER_STATUS.ACTIVE, USER_STATUS.INACTIVE, USER_STATUS.BLOCKED, USER_STATUS.PENDING],
                "default": USER_STATUS.PENDING
            }
        },
        settingsSchema
    ),
    tableConfig: {
        create: true,
        throughput: {
            read: 1, write: 1
        },
    }
}

class UserRepository extends DynamoAccessDB {
    constructor() {
        super(userModel)
    }
}

module.exports = new UserRepository()