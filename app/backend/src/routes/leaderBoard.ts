import { Router } from 'express';
import { homeTeamsPerfomace, awayTeamsPerfomace } from '../controller/leaderBoard.controller';

const router = Router();

router.get('/home', homeTeamsPerfomace);
router.get('/away', awayTeamsPerfomace);
export default router;
