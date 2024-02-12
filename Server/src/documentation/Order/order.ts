import responses from "../default.responses";

const Order = {
    "/api/v1/Order/Book/{id}": {
      post: {
        tags: ['Book'],
        security: [
          {
            JWT: [],
          },
        ],
        summary: 'Order A book',
        consumes: [
            "application/json"
        ],
        parameters:[
            {
                in: 'path',
                name: 'id',
                required: true,
                description:"This must be a book id",
                schema: {
                  type: 'number',
                },
              },
        ],
        responses,
      },
    },
    "/api/v1/Order":{
        get:{
            tags:['Order'],
            security: [
              {
                JWT: [],
              },
            ],
            summary: 'Get all your orders',
            consumes: ['application/json'],
            responses
    
          }
    },
    "/api/v1/Order/cancel/{id}": {
        put: {
          tags: ['Order'],
          security: [
            {
              JWT: [],
            },
          ],
          summary: 'Cancel Your order',
          consumes: [
              "application/json"
          ],
          parameters:[
              {
                  in: 'path',
                  name: 'id',
                  required: true,
                  description:"This must be Your order id",
                  schema: {
                    type: 'number',
                  },
                },
          ],
          responses,
        },
      },
   
  };
  
  export default Order;