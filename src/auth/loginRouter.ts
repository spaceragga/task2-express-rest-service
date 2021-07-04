import { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

const jwt = require('jsonwebtoken');
const router = require('express').Router();
const { OK, FORBIDDEN } = require('http-status-codes');
const { checkAuth } = require('./loginService');

const { JWT_SECRET_KEY } = process.env;

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

router.post('/', async (req: Request, res: Response) => {
  const user = req.body;
  const realUser = await checkAuth(user);
  
  if (realUser) {
    const payload = { userId: realUser.id, login: realUser.login };
    const jwtToken = jwt.sign(payload, String(JWT_SECRET_KEY));
    return res.status(OK).json({ token: jwtToken });
  }
  return res.status(FORBIDDEN);
});

module.exports = router;
