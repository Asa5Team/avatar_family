const postPutUserSchema = {
    name: 'postPutUserSchema',
    schema: {
        type: "object",
        properties: {
            email: {
                type: 'string',
                format: 'email'
            },

            userInfo: {
                type: "object",
                properties: {
                    fullName: {
                        type: 'string'
                    },
                    phoneNumber: {
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
        required: ['email', 'userInfo' ]
    }
}

module.exports = {
    postPutUserSchema,

}