const app = require('./app');
const { port } = require('./config/serverConfig');

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});
