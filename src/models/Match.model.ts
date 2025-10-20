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
