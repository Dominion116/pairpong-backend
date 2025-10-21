const axios = require('axios');

class PriceFetcher {
  static async getPrice(token) {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=usd`
      );
      return response.data[token].usd;
    } catch (error) {
      console.error('Error fetching price:', error);
      return null;
    }
  }
}

module.exports = { PriceFetcher };
