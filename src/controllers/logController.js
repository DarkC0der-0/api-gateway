const LogService = require('../services/logService');

exports.logRequest = async (req, res, next) => {
    await LogService.logRequest(req);
    next();
};