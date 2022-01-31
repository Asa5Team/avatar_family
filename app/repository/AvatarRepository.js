const {DynamoAccessDB} = require("./BaseRepository");
const dynamoose = require("dynamoose");

const settingsSchema = {
    timestamps: true,
}

const avatarModel = {
    tableName: 'avatar',
    schema: new dynamoose.Schema({
            id: {
                type: String,
                hashKey: true
            },
            avatarBucket: {
                type: String
            },
            reactionIds: {
                type: Array,
                schema: [{
                    type: Object,
                    schema: {
                        id: String,
                        description: String
                    }
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
