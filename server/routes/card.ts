import express, { Request, Response } from 'express';
import Card from '../models/card';

const router = express.Router();

router.post('/create', async (req: Request, res: Response) => {
    const { title, assignees, url, status, dueDate, startDate, endDate, comments, stageId } = req.body;
    const card = new Card({ title, assignees, url, status, dueDate, startDate, endDate, comments, stage: stageId });
    await card.save();
    res.status(201).send(card);
});

export default router;
