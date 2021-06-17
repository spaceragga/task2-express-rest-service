// const { PORT } = require('./common/config');
import { TryDBConnect } from './utils/db';

const server = require('./app');


const PORT = 4000;

TryDBConnect(() => {
  server.listen(PORT, () =>
    global.console.log(`App is running on http://localhost:${PORT}`)
  );
});
