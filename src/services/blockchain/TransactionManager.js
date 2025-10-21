const { signer } = require('../../config/blockchain');

class TransactionManager {
  static async sendTransaction(to, data) {
    const tx = await signer.sendTransaction({ to, data });
    return await tx.wait();
  }
}

module.exports = { TransactionManager };
