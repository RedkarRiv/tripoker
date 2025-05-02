import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../models/index.js';

class User extends Model {
  static associate(models) {
    // Un usuario pertenece a un rol
    this.belongsTo(models.Role, {
      foreignKey: 'role_id',
      as: 'role',
    });
  }
}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id',
      },
    },
    token_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, 
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
  }
);

export default User;
