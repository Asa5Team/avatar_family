const {InvalidField} = require("../errors/InvalidFieldError");
const {NotFoundError} = require("../errors/NotFoundError");
const {RequiredFieldError} = require("../errors/RequiredFieldError");


const errorHandler = (err, req, res, next) => {
    let status = 400
    let message = "Problems to process request"

    if(err instanceof NotFoundError){
        status = 404
        message = err.message
    }

    if(err instanceof InvalidField || err instanceof RequiredFieldError){
        status = 400
        message = err.message
    }

    if(err instanceof Error){
        status = 400
        message = err.message
    }

    res.status(status).json({message: message})
}

module.exports = {
    errorHandler
}