import { Router } from 'express';
import getAllTeams from '../controller/teams.controller';

const router = Router();

router.get('/', getAllTeams);

export default router;
