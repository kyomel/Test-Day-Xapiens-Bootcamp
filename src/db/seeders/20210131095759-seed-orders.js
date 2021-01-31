'use strict';
const faker = require('faker');
faker.locale = "id_ID";

const orders = [...Array(10)].map((order) => {
  return {
    user_id: faker.random.number({
      'min': 1,
      'max': 70,
    }),
    status: faker.random.arrayElement(['accepted', 'sending', 'done', 'failure']),
    driver_id: faker.random.number({
      'min': 1,
      'max': 70,
    }),
    createdAt: faker.date.recent(),
    updatedAt : faker.date.recent()
  }
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("orders", orders);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
