const paths = {
    '/': {
        get: {
            tags: ['Default'],
            summary:'Default message on server',
            requestBody: {
                description: 'default router should eturn message',
                content: {
                    'application/json': {
                        schema: {},

                    },
                },
                required: false,
            },
            responses: {
                '200': {
                    description :"Message of successful request",
                    content: {},
                },
            },
            'x-codegen-request-body-name':'body'
        },
    },
};

export default paths