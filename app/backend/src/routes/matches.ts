import { Router } from 'express';
import { getAllMatches, finishMatchById } from '../controller/match.controller';
import validadeToken from '../middlewares/tokenValidator';

const router = Router();

router.get('/', getAllMatches);
router.patch('/:id/finish', validadeToken, finishMatchById);

export default router;
