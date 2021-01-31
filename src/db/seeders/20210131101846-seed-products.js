'use strict';
const faker = require('faker');
faker.locale = "id_ID";

const products = [...Array(10)].map((product) => {
  return {
    name: faker.commerce.productName(),
    price: faker.random.number({
      'min': 1000000,
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
   await queryInterface.bulkInsert("products", products);
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

