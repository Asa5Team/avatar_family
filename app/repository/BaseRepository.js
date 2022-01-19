const db = require('../../config/dynamoConfig')

class BaseRepository {

    constructor(table) {
        this._tableName = table.tableName
        this._schema = table.schema
        this._tableConfig = table.tableConfig
        this._instance = db.instance.model(this.tableName, this.schema, this.tableConfig)
    }

    get schema() {
        return this._schema
    }

    get tableName() {
        return this._tableName
    }

    get tableConfig() {
        return this._tableConfig
    }

    get instance() {
        return this._instance
    }

    saveItem(item) {
        return this.instance.create(item)
    }

    findAll(){
        return this.instance.scan().exec()
    }

    findByKey(key, value){
        return this.instance.query(key).eq(value).exec()
    }

    update(id, item) {
        return this.instance.update({id: id}, item)
    }
}

module.exports = {
    DynamoAccessDB: BaseRepository
}
