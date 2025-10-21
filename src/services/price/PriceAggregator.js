const { PriceFetcher } = require('./PriceFetcher');

class PriceAggregator {
  static async getAggregatedPrice(token) {
    const price = await PriceFetcher.getPrice(token);
    // TODO: Add more price sources and aggregate
    return price;
  }
}

module.exports = { PriceAggregator };
