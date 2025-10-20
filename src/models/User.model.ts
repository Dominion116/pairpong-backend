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
