const db = require('../../config/dynamoConfig')
const {User} = require("../models/User");

class DynamoAccessDB {

    constructor(model) {
        this.tableName = model.modelName
        this.schema = model.schema
        this.data = db.instance.model(this.tableName, this.schema)
    }

    saveItem(item) {
        return new Promise(async (resolve, reject) => {
            try {
                await this.data.create(item)
                resolve(item)
            } catch (err) {
                reject(err)
            }
        })
    }

    findAll() {
        return new Promise(async (resolve, reject) => {
            this.data.scan().exec((err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    findById(id) {
        return new Promise((resolve, reject) => {
            this.data.query('id').eq(id).exec((err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

}

module.exports = {
    DynamoAccessDB
}
