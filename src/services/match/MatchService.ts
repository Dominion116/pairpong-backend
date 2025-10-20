// Core logic for match creation, joining, settlement
import { Match } from '../../models/Match.model';

export class MatchService {
  static async createMatch(matchData: any) {
    const match = new Match(matchData);
    return await match.save();
  }

  static async joinMatch(matchId: string, playerData: any) {
    return await Match.findOneAndUpdate({ matchId }, playerData, { new: true });
  }

  static async settleMatch(matchId: string, settlementData: any) {
    return await Match.findOneAndUpdate({ matchId }, settlementData, { new: true });
  }
}
