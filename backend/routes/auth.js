import { Router } from 'express';
import { signup, login } from '../controllers/authController.js';
import { validate } from '../middlewares/validations.js';
import { registerSchema, loginSchema } from '../../shared/schemas/user.js';

const router = Router();
router.post(
  '/register',
  validate(registerSchema),
  signup
);

router.post(
  '/login',
  validate(loginSchema),
  login
);

export default router;