const {DynamoAccessDB} = require("./BaseRepository");
const dynamoose = require("dynamoose");

const settingsSchema = {
    timestamps: true,
}

const userModel = {
    tableName: 'request-access-profile',
    schema: new dynamoose.Schema({
            idUserOwnerProfile: {
                type: String,
                hashKey: true
            },
            requestingUserId: {
                type: String,
                rangeKey: true,
                index: {
                    name: 'requestingUserIdx',
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

class RequestAccessProfileRepository extends DynamoAccessDB {

    constructor() {
        super(userModel)
    }

    findAccessRequest(idUserOwnerProfile, requestingUserId){
        return this.instance.query('idUserOwnerProfile').eq(idUserOwnerProfile).where('requestingUserId').eq(requestingUserId).exec()
    }

}

module.exports = new RequestAccessProfileRepository()
