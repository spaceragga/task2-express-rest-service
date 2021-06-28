import { getConnection, createConnection } from "typeorm";
import { config } from '../common/ormconfig';

export const connectToDB = async () => {
    let connection;

    try {
        connection = getConnection();
    } catch(err) {
        // handle error
    }

    try {
        if(connection) {
            if(!connection.isConnected) await connection.connect();
        } else {
            await createConnection(config);
        }
        console.log('Succesfully connected!');
    } catch(err) {
        console.error('Connection error!', err);
        // process.exit(1);
    }
};

//  const TryDBConnect = async (cb: () => void) => {
//     try {
//         await connectToDB();
//         cb();
//     } catch(err) {
//         console.error('DB connection err', err);
//     }
// }