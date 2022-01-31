const {DynamoAccessDB} = require("./BaseRepository");
const dynamoose = require("dynamoose");
const uuid = require('uuid')

const settingsSchema = {
    timestamps: true,
}

const dailyModel = {
    tableName: 'daily-mood',
    schema: new dynamoose.Schema({
            userId: {
                type: String,
                hashKey: true,
                "default": () => uuid.v4(),
            }, postId: {
                type: String,
                index: {
                    name: 'postIdx',
                    global: true
                }
            }, mood: {
                type: Object,
                schema: {
                    avatarImg: String,
                    moodImg: String,
                }
            }, message: {
                type: "String",
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

class DailyRepository extends DynamoAccessDB {
    constructor() {
        super(dailyModel)
    }
}

module.exports = new DailyRepository()