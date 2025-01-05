import { Request, Response } from 'express';
import { getCards, createCard } from './cardController';
import Card from '../models/card';

jest.mock('../models/card');

describe('Card Controller', () => {
  it('should get all cards', async () => {
    const req = {} as Request;
    const res = {
      json: jest.fn()
    } as unknown as Response;

    (Card.find as jest.Mock).mockResolvedValue([{ title: 'Test Card' }]);

    await getCards(req, res);

    expect(res.json).toHaveBeenCalledWith([{ title: 'Test Card' }]);
  });

  it('should create a new card', async () => {
    const req = {
      body: { title: 'New Card' }
    } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    (Card.prototype.save as jest.Mock).mockResolvedValue(req.body);

    await createCard(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });
});
