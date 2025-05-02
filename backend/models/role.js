import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../models/index.js';  

class Role extends Model {
  static associate(models) {
    // Un rol puede tener muchos usuarios
    this.hasMany(models.User, {
      foreignKey: 'role_id',
      as: 'users',
    });
  }
}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Role',
    tableName: 'roles',
    timestamps: true,
  }
);

export default Role;
