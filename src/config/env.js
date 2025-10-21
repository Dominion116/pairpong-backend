// Environment variable validation using Joi
const Joi = require('joi');

const envVarsSchema = Joi.object({
  PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  MONGODB_URI: Joi.string().required(),
  RPC_URL: Joi.string().required(),
  CHAIN_ID: Joi.number().required(),
  CONTRACT_ADDRESS: Joi.string().required(),
  ADMIN_PRIVATE_KEY: Joi.string().required(),
  COINGECKO_API_KEY: Joi.string().required(),
  ADMIN_API_KEY: Joi.string().required(),
  REDIS_URL: Joi.string(),
  COINMARKETCAP_API_KEY: Joi.string(),
  MATCH_DURATION: Joi.number(),
  PRICE_UPDATE_INTERVAL: Joi.number(),
}).unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = envVars;
