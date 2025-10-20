// Aggregate prices from multiple sources, calculate VWAP, handle outliers
import { PriceFetcher } from './PriceFetcher';

export class PriceAggregator {
  static async getAggregatedPrice(token: string) {
    const price = await PriceFetcher.getPrice(token);
    // TODO: Add more price sources and aggregate
    return price;
  }
}
