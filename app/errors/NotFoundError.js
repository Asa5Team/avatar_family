
class NotFoundError extends Error{
    constructor(entity) {
        const message = `${entity} not found`
        super(message);
        this.status = 404
    }
}

module.exports = {NotFoundError}

