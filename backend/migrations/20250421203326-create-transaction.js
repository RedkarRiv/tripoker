export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('transactions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    party_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'parties',
        key: 'id',
      },
      onDelete: 'SET NULL',
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    balance_before: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    balance_after: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    context: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable('transactions');
}
