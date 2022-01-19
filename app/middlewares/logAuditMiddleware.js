
const requestAuditLog = (req, res, next) => {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    let method = req.method
    console.info(`[AUDIT] [REQUEST] -> ${method} ${fullUrl}`)

    next()
}

const responseAuditLog = (req, res, next) =>{
    console.info(`[AUDIT] [RESPONSE]`)
    next()
}

module.exports = {
    requestAuditLog,
    responseAuditLog
}