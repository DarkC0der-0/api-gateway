const RateLimitService = require('../services/rateLimitService');

exports.checkRateLimit = async (req, res, next) => {
    try {
        await RateLimitService.checkRateLimit(req);
        next();
    } catch (error) {
        res.status(429).json({ message: 'Rate limit exceeded' });
    }
};
