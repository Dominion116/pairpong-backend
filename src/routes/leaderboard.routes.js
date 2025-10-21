const { Router } = require('express');
const { getLeaderboard } = require('../controllers/leaderboard.controller');

const router = Router();

/**
 * @swagger
 * /api/leaderboard:
 *   get:
 *     summary: Get the leaderboard
 *     tags: [Leaderboard]
 *     responses:
 *       200:
 *         description: Leaderboard retrieved successfully
 */
router.get('/', getLeaderboard);

module.exports = router;
