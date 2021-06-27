import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import path from 'path';

const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('http-status-codes');

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const {
    JWT_SECRET_KEY
  } = process.env;

module.exports = (req: Request, res: Response, next: NextFunction) => {
    switch (req.url) {
        case '/':
        case '/login':
        case '/doc': {
            return next();
        }
        default: {
            const authHeader = req.headers.authorization;

            if (authHeader !== undefined) {

                const [type, token] = authHeader.split(' ');

                if (type !== 'Bearer') {
                    res.status(UNAUTHORIZED).send('Unauthorized user!');
                } else {
                    jwt.verify(token, JWT_SECRET_KEY);
                    return next();
                }

            }
            return res.status(UNAUTHORIZED).send('Unauthorized user!');
        }
    }
}