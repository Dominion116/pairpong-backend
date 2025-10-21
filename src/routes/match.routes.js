const { Router } = require('express');
const { createMatch, joinMatch, settleMatch } = require('../controllers/match.controller');

const router = Router();

/**
 * @swagger
 * /api/matches:
 *   post:
 *     summary: Create a new match
 *     tags: [Matches]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               player1_address:
 *                 type: string
 *               player2_address:
 *                 type: string
 *               game_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Match created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', createMatch);

/**
 * @swagger
 * /api/matches/{id}/join:
 *   put:
 *     summary: Join an existing match
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The match ID
 *     responses:
 *       200:
 *         description: Joined match successfully
 *       404:
 *         description: Match not found
 */
router.put('/:id/join', joinMatch);

/**
 * @swagger
 * /api/matches/{id}/settle:
 *   put:
 *     summary: Settle a match
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The match ID
 *     responses:
 *       200:
 *         description: Match settled successfully
 *       404:
 *         description: Match not found
 */
router.put('/:id/settle', settleMatch);

module.exports = router;
