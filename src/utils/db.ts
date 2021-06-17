import { getConnection, createConnection } from "typeorm";
import { config } from '../common/ormconfig';

const connectToDB = async () => {
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
    }
};

export const TryDBConnect = async (cb: () => void) => {
    try {
        await connectToDB();
        cb();
    } catch(err) {
        console.error('DB connection err', err);
    }
}