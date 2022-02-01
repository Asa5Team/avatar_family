const {DynamoAccessDB} = require("./BaseRepository");
const dynamoose = require("dynamoose");
const {REACTIONS} = require('../utils/constants').AVATAR
const uuid = require("uuid");

const settingsSchema = {
    timestamps: true,
}

const avatarModel = {
    tableName: 'avatar',
    schema: new dynamoose.Schema({
            id: {
                type: String,
                hashKey: true,
                "default": () => uuid.v4(),
            },
            avatarBucket: {
                type: String
            },
            reactionId: {
                type: Array,
                schema: [{
                    type: String,
                    enum: REACTIONS
                }]
            }
        },
        settingsSchema),

    tableConfig: {
        create: true, throughput: {
            read: 1, write: 1
        },
    }
}

class AvatarRepository extends DynamoAccessDB {
    constructor() {
        super(avatarModel)
    }
}

module.exports = new AvatarRepository()
