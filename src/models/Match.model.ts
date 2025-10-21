
/**
 * @swagger
 * components:
 *   schemas:
 *     Match:
 *       type: object
 *       required:
 *         - matchId
 *         - player1
 *         - player2
 *         - token1
 *         - token2
 *         - amount
 *         - status
 *       properties:
 *         matchId:
 *           type: string
 *           description: The match ID
 *         player1:
 *           type: string
 *           description: The address of player 1
 *         player2:
 *           type: string
 *           description: The address of player 2
 *         token1:
 *           type: string
 *           description: The token of player 1
 *         token2:
 *           type: string
 *           description: The token of player 2
 *         amount:
 *           type: number
 *           description: The amount wagered
 *         status:
 *           type: string
 *           description: The status of the match
 *           enum: [Pending, Active, Settled, Canceled]
 *         winner:
 *           type: string
 *           description: The winner of the match
 *         priceSnapshot:
 *           type: object
 *           description: The price snapshot of the tokens
 *         timestamps:
 *           type: object
 *           description: The timestamps of the match
 */
// Schema: matchId, player1, player2, token1, token2, amount, status, winner, priceSnapshot, timestamps
import { Schema, model } from 'mongoose';

const matchSchema = new Schema({
  matchId: { type: String, required: true, unique: true },
  player1: { type: String, required: true },
  player2: { type: String, required: true },
  token1: { type: String, required: true },
  token2: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Active', 'Settled', 'Canceled'], required: true },
  winner: { type: String },
  priceSnapshot: { type: Object },
  timestamps: { type: Object },
});

export const Match = model('Match', matchSchema);
