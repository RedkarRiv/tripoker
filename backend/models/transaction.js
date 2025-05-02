import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../models/index.js';

class Transaction extends Model {
  static associate(models) {
    // Un transaction pertenece a un usuario
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });

    // Un transaction pertenece a una party
    this.belongsTo(models.Party, {
      foreignKey: 'party_id',
      as: 'party',
    });
  }
}

Transaction.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    party_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    balance_before: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    balance_after: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    context: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Transaction',
    tableName: 'transactions',
    timestamps: true,
  }
);

export default Transaction;
