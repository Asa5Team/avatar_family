const ajv = require('../util/AjvUtil')

const validateSchema = (schema, schemaName) => {
    return (request, response, next) => {
        console.log(`Validate schema: ${schemaName}`)
        ajv.validateSchema(schema, schemaName, request.body).then(() =>{
            next()
        }).catch(error => {

            console.log(`Error when validate schema:  ${error}`)
            return response.status(400).json({message: error})
        })

    }
}

module.exports = {
    validateSchema
}