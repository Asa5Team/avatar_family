const ajv = require('../utils/AjvUtil').AjvUtil

const validateSchema = (schema, schemaName) => {
    return (request, response, next) => {
        try{
            console.log(`Validate schema: ${schemaName}`)
            ajv.validateSchema(schema, schemaName, request.body)
            next()
        }catch (error) {
            console.log(`Error when validate schema:  ${error}`)

            throw error
        }
    }
}

module.exports = {
    validateSchema
}