const { Router } = require('express');
const { createMatch, joinMatch, settleMatch } = require('../controllers/match.controller');

const router = Router();

router.post('/', createMatch);

router.put('/:id/join', joinMatch);

router.put('/:id/settle', settleMatch);

module.exports = router;
