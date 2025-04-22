import { sequelize } from '../models/index.js';

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado correctamente a la base de datos MySQL');
  } catch (err) {
    console.error('❌ Error al conectar con la base de datos:', err);
  }
};