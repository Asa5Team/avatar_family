const errorResponseUtil = require('../utils/ErrorResponseUtil')


const errorHandler = (err, req, res, next) => {
    const errorCode = err.errorCode ? err.errorCode : 'DEF-0000'
    const locale = req.locale ? req.locale : 'pt-br'
    const responseMessage = errorResponseUtil.getErrorResponse(errorCode, locale)

    res.status(responseMessage.httpStatus).json(responseMessage)
}

module.exports = {
    errorHandler
}