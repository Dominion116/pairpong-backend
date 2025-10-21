
/**
 * @swagger
 * tags:
 *   name: Matches
 *   description: Match management
 */
// Routes for /matches
import { Router } from 'express';
import { createMatch, joinMatch, settleMatch } from '../controllers/match.controller';

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
 *             $ref: '#/components/schemas/Match'
 *     responses:
 *       201:
 *         description: The created match
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Match'
 *       400:
 *         description: Invalid input
 */
router.post('/', createMatch);

/**
 * @swagger
 * /api/matches/{id}/join:
 *   put:
 *     summary: Join a match
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Match ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               player2:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated match
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Match'
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
 *         description: Match ID
 *     responses:
 *       200:
 *         description: The settled match
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Match'
 *       404:
 *         description: Match not found'
 */
router.put('/:id/settle', settleMatch);

export default router;
