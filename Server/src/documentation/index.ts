import defaultPath from "../documentation/default.path"
import Book from "./Book/book";
import Tag from "./Tag/tag";
const paths ={
    ...defaultPath,
    ...Book,
    ...Tag,
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
    // consumes: ['multipart/form-data'],
    // produces: ['multipart/form-data'],
    paths
}

export default config