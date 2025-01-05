import { Request, Response } from 'express';
import { getStages, createStage } from './stageController';
import Stage from '../models/stage';

jest.mock('../models/stage');

describe('Stage Controller', () => {
  it('should get all stages', async () => {
    const req = {} as Request;
    const res = {
      json: jest.fn()
    } as unknown as Response;

    (Stage.find as jest.Mock).mockReturnValue({
      populate: jest.fn().mockResolvedValue([{ title: 'Test Stage' }])
    });

    await getStages(req, res);

    expect(res.json).toHaveBeenCalledWith([{ title: 'Test Stage' }]);
  });

  it('should create a new stage', async () => {
    const req = {
      body: { title: 'New Stage' }
    } as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response;

    (Stage.prototype.save as jest.Mock).mockResolvedValue(req.body);

    await createStage(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });
});
