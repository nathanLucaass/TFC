import { Router } from 'express';
import teams from './teams';
import users from './users';

const router = Router();

router.use('/teams', teams);
router.use('/users', users);
