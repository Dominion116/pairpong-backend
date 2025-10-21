const { BigNumber } = require('ethers');

const toBigNumber = (value) => {
  return BigNumber.from(value);
};

module.exports = { toBigNumber };
