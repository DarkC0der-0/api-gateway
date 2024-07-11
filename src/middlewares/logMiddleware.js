const LogService = require('../services/logService');

module.exports = async (req, res, next) => {
  await LogService.logRequest(req);
  next();
};
