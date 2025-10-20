// Schema: address, symbol, name, currentPrice, priceHistory[]
import { Schema, model } from 'mongoose';

const tokenSchema = new Schema({
  address: { type: String, required: true, unique: true },
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  currentPrice: { type: Number, required: true },
  priceHistory: { type: Array, default: [] },
});

export const Token = model('Token', tokenSchema);
