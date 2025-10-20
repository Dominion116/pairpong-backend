// Routes for /users
import { Router } from 'express';
import { getUser, updateUser } from '../controllers/user.controller';

const router = Router();

router.get('/:address', getUser);
router.put('/:address', updateUser);

export default router;
