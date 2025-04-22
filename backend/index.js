import 'dotenv/config';  
import express from 'express'; 
import http from 'http'; 
import { Server } from 'socket.io'; 
import cors from 'cors';  

// Sequelize
import { sequelize } from './models/index.js'; 
const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta básica
app.get('/', (req, res) => res.send('Poker backend working!'));

// Socket.IO
io.on('connection', (socket) => {
  console.log(`🔌 Usuario conectado: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`❌ Usuario desconectado: ${socket.id}`);
  });
});

// Conexión a la base de datos y arranque del servidor
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conectado correctamente a la base de datos MySQL');
    server.listen(PORT, () => {
      console.log(`🚀 Backend corriendo en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error al conectar con la base de datos:', err);
  });