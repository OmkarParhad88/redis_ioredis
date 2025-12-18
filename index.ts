import { Redis } from 'ioredis';

// By default, this connects to localhost:6379
const redis: Redis = new Redis();

async function getUser() {
  try {
    // redis.set('user:1', 'omkar');
    // await redis.expire('user:1', 10);
    await redis.lpush('user:1', 'omkar');
    await redis.lpush('user:2', 'vishal');
    await redis.lpush('user:3', 'rohit');
    await redis.lpush('user:6', 'rohidt');
    const result = await redis.rpop('user:1');
    console.log('Result:', result);
  } catch (err) {
    console.error('Redis Error:', err);
  } finally {
    // Optional: Close connection when done (usually not done in long-running apps)
    // redis.quit();
  }
}

getUser();