// routes/index.js
import express from 'express';

const router = express.Router();

// Ruta básica de prueba
router.get('/', (req, res) => {
  res.send('Poker backend working!');
});

export default router;