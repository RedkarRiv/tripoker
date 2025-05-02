import express from 'express';
import { getProfile, updateProfile } from '../controllers/userController.js';
import { validate } from '../middlewares/validations.js';
import { authenticateToken } from '../utils/auth.js';
import { editProfileSchema } from '../../shared/schemas/editProfile.js';

const router = express.Router();
router.get('/me', authenticateToken, getProfile);

router.put(
  '/profile',
  authenticateToken,
  validate(editProfileSchema),
  updateProfile
);

export default router;