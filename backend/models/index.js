import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import process from 'process';
import { fileURLToPath } from 'url';
import config from '../config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const currentConfig = config[env];

const db = {};

let sequelize;

if (currentConfig.use_env_variable) {
  sequelize = new Sequelize(process.env[currentConfig.use_env_variable], currentConfig);
} else {
  sequelize = new Sequelize(
    currentConfig.database,
    currentConfig.username,
    currentConfig.password,
    currentConfig
  );
}

const initModels = async () => {
  const modelFiles = fs
    .readdirSync(__dirname)
    .filter(file =>
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      !file.endsWith('.test.js')
    );

  const modelImports = await Promise.all(
    modelFiles.map(file => import(path.join(__dirname, file)))
  );

  modelImports.forEach((importedModule) => {
    const model = importedModule.default;
    db[model.name] = model; 
  });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db); 
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db; 
};

const exportedModels = {};
Object.keys(db).forEach(modelName => {
  exportedModels[modelName] = db[modelName];
});

export { sequelize, initModels };
export default exportedModels;
