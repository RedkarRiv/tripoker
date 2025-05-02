import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../models/index.js';

class Party extends Model {
  static associate(models) {
    // Una party puede tener muchas transacciones asociadas
    this.hasMany(models.Transaction, {
      foreignKey: 'party_id',
      as: 'transactions',
    });
  }
}

Party.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    game_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    started_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ended_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    metadata: {
      type: DataTypes.JSON,
      allowNull: true, // configuración, buy-ins, etc.
    },
  },
  {
    sequelize,
    modelName: 'Party',
    tableName: 'parties',
    timestamps: true,
  }
);

export default Party;
