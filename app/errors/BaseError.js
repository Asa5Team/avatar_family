

class BaseError extends Error{
    constructor(errorCode, title, httpCode, description) {
        super();

        this.errorCode = errorCode

    }
}

module.exports = {BaseError}