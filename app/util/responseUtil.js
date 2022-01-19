
const responseMessage = (response, options) => {
    console.log(`Response ${options.type }: ${JSON.stringify(options)}`)
    const statusDefault = options.type === 'SUCCESS' ? 200 : 400

    response.status(options.status ? options.status : statusDefault)
        .json(options.message ? options.message : {})
}

module.exports = {
    responseMessage
}