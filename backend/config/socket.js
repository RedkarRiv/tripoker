import { Server } from 'socket.io';

export const setupSocket = (server) => {
  const io = new Server(server, {
    cors: { origin: '*' }
  });

  io.on('connection', (socket) => {
    console.log(`🔌 Usuario conectado: ${socket.id}`);

    socket.on('chatMessage', (msg) => {
      console.log('📩 Mensaje recibido del cliente:', msg);
      io.emit('chatMessage', msg);
    });

    socket.on('disconnect', () => {
      console.log(`❌ Usuario desconectado: ${socket.id}`);
    });
  });

  return io;
};
