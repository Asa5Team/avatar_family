const {DynamoAccessDB} = require("./BaseRepository");
const dynamoose = require("dynamoose");
const {PROFILE_STATUS} = require('../utils/constants')

const settingsSchema = {
    timestamps: true,
}

const profileModel = {
    tableName: 'profile',
    schema: new dynamoose.Schema({
            id: {
                type: String,
                hashKey: true
            },
            nick: {
                type: String,
                index: {
                    name: "nickUserIdx",
                    global: true
                }
            },
            avatarId: {
                type: String,
            },
            profilePhotoURL: {
                type: String
            },
            profileStatus: {
                type: String,
                enum: [
                    PROFILE_STATUS.ACTIVE,
                    PROFILE_STATUS.INACTIVE,
                    PROFILE_STATUS.BLOCKED,
                    PROFILE_STATUS.SUSPENDED,
                    PROFILE_STATUS.PENDING
                ],
                "default": PROFILE_STATUS.PENDING
            }
        }
        , settingsSchema
    ),

    tableConfig: {
        create: true,
        throughput: {
            read: 1, write: 1
        },
    }
}

class ProfileRepository extends DynamoAccessDB {
    constructor() {
        super(profileModel)
    }
}

module.exports = new ProfileRepository()