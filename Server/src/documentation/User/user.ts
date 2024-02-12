import responses from "../default.responses";


const User ={ 
    "/api/v1/user/signup": {
        post: {
        tags: ['User'],
        summary :" sign up",
        consumes: ['application/json'],
        parameters: [
            {
                in: 'body',
                name: "Singup",
                required: true,
                schema: {
                    example: {
                        email: "rutagaramaaxcel@gmail.com",
                        password: "helloworld"
                    }
                },
                
            },
            
        ],
        responses
    }
    },
    "/api/v1/user/login": {
        post: {
            tags: ['User'],
            summary :" sign up",
            consumes: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: "Singup",
                    required: true,
                    schema: {
                        example: {
                            email: "rutagaramaaxcel@gmail.com",
                            password: "helloworld"
                        }
                    },
                    
                },
                
            ],
            responses
        }
    }
}

export default User