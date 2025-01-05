import { Request, Response } from 'express';
import Card from '../models/card';

export const getCards = async (req: Request, res: Response) => {
    const cards = await Card.find();
    res.json(cards);
};

export const createCard = async (req: Request, res: Response) => {
    const card = new Card(req.body);
    await card.save();
    res.status(201).json(card);
};
