import { Router } from 'express';
import { getStages, createStage } from '../controllers/stageController';

const router = Router();

router.get('/', getStages);
router.post('/', createStage);

export default router;
