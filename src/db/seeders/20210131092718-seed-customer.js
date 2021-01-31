'use strict';
const { fake } = require('faker');
const faker = require('faker');
faker.locale = "id_ID";

const customers = [...Array(10)].map((customer) => {
  return {
    full_name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
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
   await queryInterface.bulkInsert("customers", customers);
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
