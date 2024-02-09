import defaultPath from "../documentation/default.path"

const paths ={
    ...defaultPath
}


const config ={
    swagger: '2.0',
    info: {
        version: '1.0.0',
        title: "Book Store Api Documentation",
        description: '',
    },
    basePath:'/',
    schemes: ['http','https'],
    securityDefinitions:{
        JWT: {
            type: 'apiKey',
            name: 'Authorization',
            in:'header',
        },
    },
    tags: [
        {
            name: "Book Store APIs Documentation"
        }
    ],
    consumes: ['application/json'],
    produces: ['application/json'],
    paths
}

export default config