
import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PairPong API',
      version: '1.0.0',
      description: 'API Documentation for PairPong',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts'], // files containing annotations as above
};

export const swaggerSpec = swaggerJsdoc(options);
