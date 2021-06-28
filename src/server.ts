// const { PORT } = require('./common/config');
const server = require('./app');

server.listen(4000, () =>
  global.console.log(`App is running on http://localhost:4000`)
);
