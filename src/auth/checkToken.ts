import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import path from 'path';

const jwt = require('jsonwebtoken');

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const {
    JWT_SECRET_KEY
  } = process.env;

module.exports = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.header('Authorization');

    if (authHeader !== undefined) {

        const tokenString: any = req.header('Authorization');

        const [type, token] = tokenString.split(' ');

        if (type !== 'Bearer') {
            res.status(401).send('Unauthorized user!');
        } else {
            jwt.verify(token, JWT_SECRET_KEY);
            return next();
        }

    }

    return res.status(401).send('Unauthorized user!');
};