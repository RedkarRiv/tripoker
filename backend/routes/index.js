import express from 'express';
import authRoutes from './auth.js'; 

const router = express.Router();


router.get('/', (req, res) => {res.send('Poker backend working!');});

router.use('/auth', authRoutes);

export default router;