const { PORT } = require('./common/config');
const server = require('./app');

server.listen(PORT, () =>
  global.console.log(`App is running on http://localhost:${PORT}`)
);
