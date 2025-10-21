const { Schema, model } = require('mongoose');

const matchSchema = new Schema({
  matchId: { type: String, required: true, unique: true },
  player1: { type: String, required: true },
  player2: { type: String, required: true },
  token1: { type: String, required: true },
  token2: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Active', 'Settled', 'Canceled'], required: true },
  winner: { type: String },
  player1_score: { type: Number, default: 0 },
  player2_score: { type: Number, default: 0 },
  priceSnapshot: { type: Object },
  timestamps: { type: Object },
});

const Match = model('Match', matchSchema);

module.exports = { Match };
