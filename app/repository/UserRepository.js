const {DynamoAccessDB} = require("./BaseRepository");
const dynamoose = require("dynamoose");
const uuid = require('uuid')


const userModel = {
    tableName: 'user',
    schema: new dynamoose.Schema({
        id: {
            type: String,
            hashKey: true,
            "default": () => uuid.v4(),
            index: {
                name: 'idUserIdx',
                global: true
            }
        }, email: {
            type: String,
            index: {
                name: 'emailUserIdx',
                global: true
            }
        }, userInfo: {
            type: Object,
            schema: {
                fullName: String,
                birthDate: String,
                country: String
            }
        }, nick: {
            type: "String",
            index: {
                name: "nickUserIdx",
                global: true
            }
        },
        isActive: {
            type: Boolean,
            require: true
        }
    }, {
        timestamps: true
    }),
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