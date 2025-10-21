
// Express app setup, middleware, and routes
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import { errorMiddleware } from './middleware/error.middleware';
import matchRoutes from './routes/match.routes';
import userRoutes from './routes/user.routes';

dotenv.config();

const app = express();

app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/matches', matchRoutes);
app.use('/api/users', userRoutes);

// Error handling
app.use(errorMiddleware);

// DB Connection
mongoose
  .connect(process.env.MONGODB_URI || '', { useNewUrlParser: true, useUnifiedTopology: true } as any)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

export default app;
