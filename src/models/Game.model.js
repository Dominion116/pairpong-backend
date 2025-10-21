const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  match_id: { type: Schema.Types.ObjectId, ref: 'Match', required: true },
  player1_score: { type: Number, required: true },
  player2_score: { type: Number, required: true },
  game_date: { type: Date, default: Date.now },
});

const Game = model('Game', gameSchema);

module.exports = { Game };
