const pool = require('../config/dbConfig');

class LogService {
  static async logRequest(req) {
    const { method, url, headers } = req;
    const text = 'INSERT INTO logs(method, url, headers) VALUES($1, $2, $3)';
    const values = [method, url, JSON.stringify(headers)];
    await pool.query(text, values);
  }
}

module.exports = LogService;
