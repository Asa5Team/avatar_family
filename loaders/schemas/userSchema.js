const postPutUserSchema = {
    name: 'postPutUserSchame',
    schema: {
        type: "object",
        properties: {
            email: {
                type: 'string',
                format: 'email'
            },

            nick: {
                type: 'string'
            },

            userInfo: {
                type: "object",
                properties: {
                    fullName: {
                        type: 'string'
                    },
                    birthDate: {
                        type: 'string',
                        format: 'date'
                    },
                    country: {
                        type: 'string'
                    }
                },
                required: ['fullName', 'birthDate', 'country']
            },
        },
        required: ['email', 'nick', 'userInfo']
    }
}

module.exports = {
    postPutUserSchema,

}