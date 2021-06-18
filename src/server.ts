// const { PORT } = require('./common/config');
import { connectToDB } from './utils/db';

const server = require('./app');


const PORT = 4000;

const start = async () => {
  await connectToDB();

server.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));

};

start();
