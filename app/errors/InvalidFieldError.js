
class InvalidFieldError extends Error{
    constructor(field) {
        const message = `${field} is not valid`
        super(message);
        this.status = 400
    }
}

module.exports = {InvalidField: InvalidFieldError}
