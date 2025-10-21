const { Schema, model } = require('mongoose');

const transactionSchema = new Schema({
  txHash: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  matchId: { type: String, required: true },
  status: { type: String, required: true },
  gasUsed: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Transaction = model('Transaction', transactionSchema);

module.exports = Transaction;
