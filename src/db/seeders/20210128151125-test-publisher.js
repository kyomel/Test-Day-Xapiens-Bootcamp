'use strict';
const faker = require('faker');
faker.locale = "id_ID";

const Publishers = [...Array(10)].map((Publisher) => {
  return {
    name : faker.company.companyName(),
    address : faker.address.streetAddress(),
    email : faker.internet.email(),
    phone : faker.phone.phoneNumber(),
    website : faker.internet.domainName(),
    createdAt : faker.date.recent(),
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
      await queryInterface.bulkInsert("Publishers", Publishers);
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
