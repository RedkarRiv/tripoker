import express from 'express';
import authRoutes from './auth.js'; 
import userRoutes from './user.js';

const router = express.Router();


router.get('/', (req, res) => {res.send('Poker backend working!');});
router.use('/auth', authRoutes);
router.use('/user', userRoutes); 

export default router;