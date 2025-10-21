// Core logic for match creation, joining, settlement
const { Match } = require('../../models/Match.model');

class MatchService {
  static async createMatch(matchData) {
    const match = new Match(matchData);
    return await match.save();
  }

  static async joinMatch(matchId, playerData) {
    return await Match.findOneAndUpdate({ matchId }, playerData, { new: true });
  }

  static async settleMatch(matchId, settlementData) {
    return await Match.findOneAndUpdate({ matchId }, settlementData, { new: true });
  }
}

module.exports = { MatchService };
