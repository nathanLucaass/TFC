import { Router } from 'express';
import homeTeamsPerfomace from '../controller/leaderBoard.controller';

const router = Router();

router.get('/home', homeTeamsPerfomace);
export default router;
