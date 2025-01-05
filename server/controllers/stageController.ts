import { Request, Response } from 'express';
import Stage from '../models/stage';

export const getStages = async (req: Request, res: Response) => {
    const stages = await Stage.find().populate('cards');
    res.json(stages);
};

export const createStage = async (req: Request, res: Response) => {
    const stage = new Stage(req.body);
    await stage.save();
    res.status(201).json(stage);
};
