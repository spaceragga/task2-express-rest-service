import { Request, Response } from 'express';

const router = require('express').Router();
const usersService = require('./usersService');

router.get('/', (_req: Request, res: Response) => {
    const users = usersService.getAllUserDB();
    res.status(200).send(users);
});

router.get('/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    const user = usersService.getUserDB(id);

    if(!user) {
        res.status(403).send('User is not found!');
    } else {
        res.status(200).send(user);
    }
});

router.post('/', async (req: Request, res: Response) => {
    const data = req.body;
    const user = await usersService.createUserDB(data);
    if(!user) {
        res.status(400).send('Bad request!');
    } else {
        res.status(200).send(user);
    }
})

module.exports = router;