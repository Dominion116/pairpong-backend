
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */
// Routes for /users
import { Router } from 'express';
import { getUser, updateUser } from '../controllers/user.controller';

const router = Router();

/**
 * @swagger
 * /api/users/{address}:
 *   get:
 *     summary: Get user by address
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: address
 *         schema:
 *           type: string
 *         required: true
 *         description: User address
 *     responses:
 *       200:
 *         description: The user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get('/:address', getUser);

/**
 * @swagger
 * /api/users/{address}:
 *   put:
 *     summary: Update user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: address
 *         schema:
 *           type: string
 *         required: true
 *         description: User address
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.put('/:address', updateUser);

export default router;
