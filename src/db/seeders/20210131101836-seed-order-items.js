'use strict';
const faker = require('faker');
faker.locale = "id_ID";

const order_items = [...Array(10)].map((order_item) => {
  return {
    order_id: faker.random.number({
      'min': 1,
      'max': 10
    }),
    product_id: faker.random.number({
      'min': 1,
      'max': 10
    }),
    quantity: faker.random.number(),
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
   await queryInterface.bulkInsert("order_items", order_items);
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


