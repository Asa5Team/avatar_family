class RequiredFieldError extends Error{
    constructor(field) {
        const message = `${field} is required!`
        super(message);
    }
}

module.exports = {RequiredFieldError}