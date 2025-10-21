const { Match } = require('../../models/Match.model');
const { Game } = require('../../models/Game.model');
const { User } = require('../../models/User.model');

class MatchService {
  static async createMatch(matchData) {
    const match = new Match(matchData);
    return await match.save();
  }

  static async joinMatch(matchId, playerData) {
    return await Match.findOneAndUpdate({ matchId }, playerData, { new: true });
  }

  static async settleMatch(matchId, settlementData) {
    const { player1_score, player2_score } = settlementData;

    const match = await Match.findOne({ matchId });

    if (!match) {
      throw new Error('Match not found');
    }

    // Determine winner
    const winner = player1_score > player2_score ? match.player1 : match.player2;
    const loser = player1_score < player2_score ? match.player1 : match.player2;

    // Create a new game record
    const game = new Game({
      match_id: match._id,
      player1_score,
      player2_score,
    });
    await game.save();

    // Update match with scores and winner
    match.player1_score = player1_score;
    match.player2_score = player2_score;
    match.winner = winner;
    match.status = 'Settled';
    await match.save();

    // Update user stats
    await User.findOneAndUpdate({ address: winner }, { $inc: { wins: 1 } });
    await User.findOneAndUpdate({ address: loser }, { $inc: { losses: 1 } });

    return match;
  }
}

module.exports = { MatchService };
