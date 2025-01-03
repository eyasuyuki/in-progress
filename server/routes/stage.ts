import express, { Request, Response } from 'express';
import Stage from '../models/stage';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
    const { title, subtitle, boardId } = req.body;
    const stage = new Stage({ title, subtitle, board: boardId });
    await stage.save();
    res.status(201).send(stage);
});

export default router;
