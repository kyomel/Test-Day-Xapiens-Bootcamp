'use strict';
const { fake } = require('faker');
const faker = require('faker');
faker.locale = "id_ID";

const drivers = [...Array(10)].map((driver) => {
  return {
    full_name: faker.name.findName(),
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
   await queryInterface.bulkInsert("drivers", drivers);
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
