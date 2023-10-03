import { Router } from 'express';
import login from '../controller/users.controller';

const router = Router();

router.post('/', login);

export default router;
