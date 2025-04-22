import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import process from 'process';
import { fileURLToPath } from 'url'; // Importar fileURLToPath
import config from '../config/config.js'; // Importar configuración de manera correcta

// Obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url); // Convertir URL a ruta
const __dirname = path.dirname(__filename); // Obtener el directorio de __filename
const basename = path.basename(__filename);
const db = {};
const env = process.env.NODE_ENV; // Establecer 'development' por defecto si no está definido
console.log("Using environment:", env);  // Verifica el valor de NODE_ENV
console.log("Config for current environment:", config[env]);
const currentConfig = config[env];  // Acceder al ambiente actual de la configuración

let sequelize;
if (currentConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[currentConfig.use_env_variable], currentConfig);
} else {
  sequelize = new Sequelize(currentConfig.database, currentConfig.username, currentConfig.password, currentConfig);
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = import(path.join(__dirname, file)); 
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { sequelize }; // Exportamos explícitamente sequelize
export default db;
