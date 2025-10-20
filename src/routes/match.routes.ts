// Routes for /matches
import { Router } from 'express';
import { createMatch, joinMatch, settleMatch } from '../controllers/match.controller';

const router = Router();

router.post('/', createMatch);
router.put('/:id/join', joinMatch);
router.put('/:id/settle', settleMatch);

export default router;
