import { Router } from 'express';
import {
  getAllMatches,
  finishMatchById,
  atualizateMatchById,
} from '../controller/match.controller';
import validadeToken from '../middlewares/tokenValidator';

const router = Router();

router.get('/', getAllMatches);
router.patch('/:id/finish', validadeToken, finishMatchById);
router.patch('/:id', validadeToken, atualizateMatchById);

export default router;
