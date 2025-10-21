
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - address
 *       properties:
 *         address:
 *           type: string
 *           description: The user's address
 *         totalMatches:
 *           type: number
 *           description: The total number of matches played by the user
 *         wins:
 *           type: number
 *           description: The total number of matches won by the user
 *         losses:
 *           type: number
 *           description: The total number of matches lost by the user
 *         totalWagered:
 *           type: number
 *           description: The total amount wagered by the user
 *         totalWon:
 *           type: number
 *           description: The total amount won by the user
 */
// Schema: address, totalMatches, wins, losses, totalWagered, totalWon
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  address: { type: String, required: true, unique: true },
  totalMatches: { type: Number, default: 0 },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  totalWagered: { type: Number, default: 0 },
  totalWon: { type: Number, default: 0 },
});

export const User = model('User', userSchema);
