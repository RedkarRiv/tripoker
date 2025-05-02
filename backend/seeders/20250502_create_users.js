
export const up = async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('users', [
    {
      firstName: 'Admin',
      alias: 'El Jefe',
      email: 'admin@admin.com',
      password: '$2b$10$MAo5vxDbyveg1qUNCkcqXeHOez9wWKYAIBUISP59j/jbSz.7RiD.y',
      role_id: 1,
      token_amount: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Juanito',
      alias: 'El Chido',
      email: 'mod@mod.com',
      password: '$2b$10$MAo5vxDbyveg1qUNCkcqXeHOez9wWKYAIBUISP59j/jbSz.7RiD.y',
      role_id: 2,
      token_amount: 150,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Tina',
      alias: 'La Genia',
      email: 'tina@tina.com',
      password: '$2b$10$MAo5vxDbyveg1qUNCkcqXeHOez9wWKYAIBUISP59j/jbSz.7RiD.y',
      role_id: 3,
      token_amount: 200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Pepe',
      alias: 'El Torbellino',
      email: 'pepe@pepe.com',
      password: '$2b$10$MAo5vxDbyveg1qUNCkcqXeHOez9wWKYAIBUISP59j/jbSz.7RiD.y',
      role_id: 3,
      token_amount: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Lola',
      alias: 'La Risa',
      email: 'lola@lola.com',
      password: '$2b$10$MAo5vxDbyveg1qUNCkcqXeHOez9wWKYAIBUISP59j/jbSz.7RiD.y',
      role_id: 3,
      token_amount: 75,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('users', null, {});
};