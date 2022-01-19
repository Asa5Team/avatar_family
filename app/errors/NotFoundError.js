
class NotFoundError extends Error{
    constructor(entity) {
        const message = `${entity} not found`
        super(message);
    }
}

module.exports = {NotFoundError}

