
class CustomError extends Error{
    constructor(errorCode, message) {
        // const responseMessage = errorResponseUtil.getErrorResponse(errorCode, locale)
        super(message);
        this.errorCode = errorCode
    }

}

module.exports = {CustomError}