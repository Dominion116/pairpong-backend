// Methods: getMatch, finalizeMatch, getActiveMatches with gas estimation
import { contract } from '../../config/blockchain';

export class ContractService {
  static async getMatch(matchId: string) {
    return await contract.getMatch(matchId);
  }

  static async finalizeMatch(matchId: string) {
    const tx = await contract.finalizeMatch(matchId);
    return await tx.wait();
  }

  static async getActiveMatches() {
    return await contract.getActiveMatches();
  }
}
