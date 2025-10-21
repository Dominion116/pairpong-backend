const { Router } = require('express');
const { getUser, updateUser } = require('../controllers/user.controller');

const router = Router();

/**
 * @swagger
 * /api/users/{address}:
 *   get:
 *     summary: Get user information
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: address
 *         schema:
 *           type: string
 *         required: true
 *         description: User's wallet address
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 */
router.get('/:address', getUser);

/**
 * @swagger
 * /api/users/{address}:
 *   put:
 *     summary: Update user information
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: address
 *         schema:
 *           type: string
 *         required: true
 *         description: User's wallet address
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.put('/:address', updateUser);

module.exports = router;
