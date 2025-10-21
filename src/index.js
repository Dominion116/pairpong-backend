// Main entry point - bootstrap application
const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const gracefulShutdown = (signal) => {
  console.log(`${signal} received. Closing http server.`);
  server.close(() => {
    console.log('Http server closed.');
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
      process.exit(0);
    });
  });
};

// Listen for termination signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// For nodemon restarts
process.once('SIGUSR2', () => {
  gracefulShutdown('SIGUSR2');
});
