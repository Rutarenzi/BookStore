import responses from "../default.responses";

const Tag = {
    "/api/v1/Tag": {
        post: {
            tags: ['Tag'],
            security: [
              {
                JWT: [],
              },
            ],
            summary: 'create book',
            consumes: ['application/json'],
            parameters:[
                {
                    in: 'body',
                    name: 'tagname',
                    required: true,
                    schema: {
                      example: {
                        tagname: 'fiction',
                        
                      },
                    },
                  }
            ],
            responses,
          },
    },
  };
  
  export default Tag;