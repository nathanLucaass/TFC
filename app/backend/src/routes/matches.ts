import { Router } from 'express';
import getAllMatches from '../controller/match.controller';

const router = Router();

router.get('/', getAllMatches);

export default router;
