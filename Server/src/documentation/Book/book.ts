import responses from "../default.responses";

const Book = {
    "/api/v1/Book": {
      post: {
        tags: ['Book'],
        security: [
          {
            JWT: [],
          },
        ],
        summary: 'create book',
        consumes: [
            "multipart/form-data"
        ],
        parameters:[

        {
            in:"formData",
            name: "title",
            type: "string",
            description:"title"  
        },
          {
            in:"formData",
            name: "image",
            type: "file",
            description:"Image"
          },
          {
            in:"formData",
            name: "writer",
            type: "string",
            description:"writer"  
        },
        {
            in:"formData",
            name: "price",
            type: "number",
            description:"price"  
        },
        {
        in: "formData",
        name: "tags",
        type: "array", 
        items: {
          type: "string",
        },
        description: "tags",
      },
        ],
        responses,
      },
      get:{
        tags:['Book'],
        security: [
          {
            JWT: [],
          },
        ],
        summary: 'getAll book',
        consumes: ['application/json'],
        responses

      }
    },
   
  };
  
  export default Book;