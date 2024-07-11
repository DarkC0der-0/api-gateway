const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

class AuthService {
    static async authenticate(credentials) {
        const user = await UserModel.findByUsername(credentials.username);
        if (user && user.password === credentials.password) {
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return token
        } else {
            throw new Error('Authentication failed');
        }
    }

    static async verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error('Invalid Token');
        }
    }
}

module.exports = AuthService;

