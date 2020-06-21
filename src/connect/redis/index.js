const Redis = require("redis");

const redis = Redis.createClient(
    {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    }
);

redis.on("connect", () => {
    console.log('✅ Redis - Connection has been established successfully.');
});

redis.on("error", (err) => {
    console.error("Redis error.", err);
});

module.exports = redis;  