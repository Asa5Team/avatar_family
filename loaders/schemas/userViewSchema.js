const postPutUserSchema = {
    name: 'postPutUserSchame',
    schema: {
        type: "object",
        properties: {
            email: {
                type: 'string',
                format: 'email'
            }, whoAccessMyProfile: {
                type: 'array',
                items: 'string'

            }, whoIAccessProfile: {
                type: 'array',
                items: 'string'
            },
        },
        required: ['email']
    }
}

module.exports = {
    postPutUserSchema,
}