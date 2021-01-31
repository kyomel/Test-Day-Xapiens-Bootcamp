'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'customers',
          },
          key: 'id'
        },
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM({
          values: ['accepted', 'sending', 'done', 'failure']
        })
      },
      driver_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'drivers',
          },
          key: 'id',
        },
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};