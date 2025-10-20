// Redis caching implementation
import redis from 'redis';

const client = redis.createClient();

export const getCache = (key: string) => {
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

export const setCache = (key: string, value: string) => {
  client.set(key, value);
};
