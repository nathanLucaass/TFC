import { Router } from 'express';
import { getAllTeams, getTeamById } from '../controller/teams.controller';

const router = Router();

router.get('/', getAllTeams);
router.get('/:id', getTeamById);

export default router;
