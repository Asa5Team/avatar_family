class RequiredFieldError extends Error{
    constructor(field) {
        const message = `${field} is required!`
        super(message)
        this.status = 400
    }
}

module.exports = {RequiredFieldError}