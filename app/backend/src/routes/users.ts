import { Router } from 'express';
import login from '../controller/users.controller';
import loginValidator from '../middlewares/loginValidator';

const router = Router();

router.post('/', loginValidator, login);

export default router;
