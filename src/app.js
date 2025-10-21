
// Express app setup, middleware, and routes
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const { swaggerSpec } = require('./config/swagger');
const { errorMiddleware } = require('./middleware/error.middleware');
const matchRoutes = require('./routes/match.routes');
const userRoutes = require('./routes/user.routes');

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
  .connect(process.env.MONGODB_URI || '', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

module.exports = app;
