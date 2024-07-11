const AuthService = require('../services/authService');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        await AuthService.verifyToken(token);
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
