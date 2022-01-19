const addFormats = require('ajv-formats')
const Ajv = require("ajv");
const {InvalidField} = require("../errors/InvalidFieldError");
const {RequiredFieldError} = require("../errors/RequiredFieldError");

class AjvUtil {

    static getInstance() {
        if (!AjvUtil.instance) {
            AjvUtil.instance = new Ajv()
            addFormats(AjvUtil.instance)
        }

        return AjvUtil.instance
    }

    static validateSchema(schema, schemaName, data) {
        if (!this.getInstance().getSchema(schemaName)) {
            console.log(`Including schema: ${schemaName}`)
            this.getInstance().addSchema(schema, schemaName)
        }

        if (!this.getInstance().validate(schemaName, data)) {
            console.log(`[VALIDATE][ERROR] -> ${JSON.stringify(this.getInstance().errors)}`)
            const errors = this.getInstance().errors

            if (errors[0].params.format) {
                throw new InvalidField(errors[0].params.format)
            }

            if (errors[0].params.missingProperty) {
                throw new RequiredFieldError(errors[0].params.missingProperty)
            }
        }
    }
}

module.exports = AjvUtil