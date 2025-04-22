import 'dotenv/config';
import express from 'express';
import http from 'http';
import cors from 'cors';

// Importación de configuración y rutas
import { connectDB } from './config/database.js';
import { setupSocket } from './config/socket.js';
import routes from './routes/index.js';

const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/', routes);

// Conexión a la base de datos y arranque del servidor
connectDB()
  .then(() => {
    setupSocket(server);
    server.listen(PORT, () => {
      console.log(`🚀 Backend corriendo en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error al iniciar el servidor', err);
  });