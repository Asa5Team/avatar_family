const {DynamoAccessDB} = require("./BaseRepository");
const dynamoose = require("dynamoose");

const settingsSchema = {
    timestamps: true,
}

const profileConnectionsModel = {
    tableName: 'profile-connections',
    schema: new dynamoose.Schema({
            profileOwnerId: {
                type: String,
                hashKey: true
            },
            followerRequestId: {
                type: String,
                rangeKey: true,
                index: {
                    name: 'followerRequestIdx',
                    global: true
                }
            },
        },
        settingsSchema),

    tableConfig: {
        create: true, throughput: {
            read: 1, write: 1
        },
    }
}

class ProfileConnectionsRepository extends DynamoAccessDB {
    constructor() {
        super(profileConnectionsModel)
    }
}

module.exports = new ProfileConnectionsRepository()
