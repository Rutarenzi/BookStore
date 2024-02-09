const responses ={
    200: {
        description: 'success',
    },
    201: {
        description:'OK',
    },
    400: {
        description: 'Bad request',
    },
    401: {
        description: "not authenticated"
    },
    403: {
        description: 'UnAuthorized'
    },
    404: {
        description : "Not Found",
    },
    409: {
        description :"Conflicts"
    },
    500: {
        description: 'server Error'
    },
}


export default responses