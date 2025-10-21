const { Schema, model } = require('mongoose');

const tokenSchema = new Schema({
  address: { type: String, required: true, unique: true },
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  currentPrice: { type: Number, required: true },
  priceHistory: { type: Array, default: [] },
});

const Token = model('Token', tokenSchema);

module.exports = Token;
