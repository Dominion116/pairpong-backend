const { Router } = require('express');
const { getGameById } = require('../controllers/game.controller');

const router = Router();

/**
 * @swagger
 * /api/games/{id}:
 *   get:
 *     summary: Get game by ID
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Game ID
 *     responses:
 *       200:
 *         description: Game found
 *       404:
 *         description: Game not found
 */
router.get('/:id', getGameById);

module.exports = router;
