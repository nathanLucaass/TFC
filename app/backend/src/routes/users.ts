import { Router } from 'express';
import validadeToken from '../middlewares/tokenValidator';
import { login, getRole } from '../controller/users.controller';
import loginValidator from '../middlewares/loginValidator';

const router = Router();

router.post('/', loginValidator, login);

router.get('/role', validadeToken, getRole);

export default router;
