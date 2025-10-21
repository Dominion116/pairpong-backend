const redis = require('redis');

const client = redis.createClient();

const getCache = (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, reply) => {
      if (err) {
        reject(err);
      } else {
        resolve(reply);
      }
    });
  });
};

const setCache = (key, value) => {
  client.set(key, value);
};

module.exports = { getCache, setCache };
