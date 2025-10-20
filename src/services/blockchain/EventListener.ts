// Listen to MatchCreated, MatchJoined, MatchSettled, MatchCanceled events, store last block, handle reconnection
import { contract } from '../../config/blockchain';

export class EventListener {
  static listen() {
    contract.on('MatchCreated', (matchId, player1, token1, amount) => {
      console.log('MatchCreated', { matchId, player1, token1, amount });
      // TODO: Handle event
    });

    contract.on('MatchJoined', (matchId, player2, token2) => {
      console.log('MatchJoined', { matchId, player2, token2 });
      // TODO: Handle event
    });

    contract.on('MatchSettled', (matchId, winner, amount) => {
      console.log('MatchSettled', { matchId, winner, amount });
      // TODO: Handle event
    });

    contract.on('MatchCanceled', (matchId) => {
      console.log('MatchCanceled', { matchId });
      // TODO: Handle event
    });
  }
}
