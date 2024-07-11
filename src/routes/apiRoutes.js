const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const rateLimitController = require('../controllers/rateLimitController');
const logController = require('../controllers/logController');

router.post('/login', authController.authenticate);

router.use(rateLimitController.checkRateLimit);
router.use(logController.logRequest);

router.get('/some-endpoint', (req, res) => {
    res.send('Hello from the API Gateway');
});

module.exports = router;