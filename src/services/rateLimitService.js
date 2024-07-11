const rateLimit = require('express-rate-limit');

class RateLimitService {
    static rateLimiter = rateLimit({
        windowMS: 15 * 60 * 1000,
        max: 100,
    });

    static async checkRateLimit(req) {
        return new Promise((resolve, reject) => {
            this.rateLimiter(req, {}, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}

module.exports = RateLimitService;