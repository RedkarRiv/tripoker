import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';

import { connectDB } from './config/database.js';
import { setupSocket } from './config/socket.js';
import routes from './routes/index.js';

const EXPRESS_PORT = process.env.APP_PORT;
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`Recibiendo solicitud ${req.method} a ${req.url}`);
  next();
});

app.use('/', routes);

connectDB()
  .then(() => {
    setupSocket(server);
    server.listen(EXPRESS_PORT, () => {
      console.log(`🚀 Backend corriendo en el puerto ${EXPRESS_PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error al iniciar el servidor', err);
  });