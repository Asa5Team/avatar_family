
class InvalidFieldError extends Error{
    constructor(field) {
        const message = `${field} is not valid`
        super(message);
    }
}

module.exports = {InvalidField: InvalidFieldError}
