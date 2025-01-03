import express, { Request, Response } from 'express';
import Board from '../models/board';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
    const { title, subtitle, users } = req.body;
    const board = new Board({ title, subtitle, users });
    await board.save();
    res.status(201).send(board);
});

export default router;
