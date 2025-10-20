# Crypto Match Backend

This is the backend for a crypto-based prediction market application.

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root of the project and add the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/crypto-match
   JWT_SECRET=your-secret-key
   ```

3. **Start the server:**
   ```
   npm start
   ```

## API Endpoints

* `POST /api/matches`: Create a new match.
* `PUT /api/matches/:id/join`: Join an existing match.
* `PUT /api/matches/:id/settle`: Settle a match.
* `GET /api/users/:address`: Get user information.
* `PUT /api/users/:address`: Update user information.
