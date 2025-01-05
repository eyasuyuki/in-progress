import { Request, Response } from 'express';
import Board from '../models/board';

export const getBoards = async (req: Request, res: Response) => {
    const boards = await Board.find().populate('stages');
    res.json(boards);
};

export const createBoard = async (req: Request, res: Response) => {
    const board = new Board(req.body);
    await board.save();
    res.status(201).json(board);
};
