const propertiesReader = require('properties-reader')
const path = require('path')

const getErrorResponse = (errorCode, location) => {
    const filePath = `${path.resolve(__dirname, `../../`)}/message_${location.toLowerCase()}.properties`
    const reader = propertiesReader(filePath)

    return {
        code: reader.get(`${errorCode}.code`),
        title: reader.get(`${errorCode}.title`),
        message: reader.get(`${errorCode}.message`),
        httpStatus: reader.get(`${errorCode}.httpStatus`),
    }
}

module.exports = {
    getErrorResponse
}

