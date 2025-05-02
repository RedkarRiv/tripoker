
export const up = async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('roles', [
    {
      name: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'moderator',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'player',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'guest',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('roles', null, {});
};