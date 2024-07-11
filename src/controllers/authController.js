const AuthService = require('../services/authService');

exports.authenticate = async (req, res) => {
    try {
        const token = await AuthService.authenticate(req.body);
        res.status(200).json({ token });
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed ' })
    }
};