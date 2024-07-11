const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

app.use(express.json());
app.use(authMiddleware);

app.use('/api', apiRoutes);

module.exports = app;