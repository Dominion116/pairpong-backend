const { Router } = require('express');
const { getUser, updateUser } = require('../controllers/user.controller');

const router = Router();

router.get('/:address', getUser);

router.put('/:address', updateUser);

module.exports = router;
