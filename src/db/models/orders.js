'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.hasMany(models.order_items, {
        foreignKey: 'order_id'
      }),
      orders.belongsTo(models.customers, {
        foreignKey: 'user_id'
      }),
      orders.belongsTo(models.drivers, {
        foreignKey: 'drive_id'
      })
    }
  };
  orders.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM({
        values: ['accepted', 'sending', 'done', 'failure']
      })
    },
    driver_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'drivers',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};