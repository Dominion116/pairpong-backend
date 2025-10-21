const { contract } = require('../../config/blockchain');

class ContractService {
  static async getMatch(matchId) {
    return await contract.getMatch(matchId);
  }

  static async finalizeMatch(matchId) {
    const tx = await contract.finalizeMatch(matchId);
    return await tx.wait();
  }

  static async getActiveMatches() {
    return await contract.getActiveMatches();
  }
}

module.exports = { ContractService };
