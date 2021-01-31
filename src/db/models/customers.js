'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      customers.hasMany(models.orders, {
        foreignKey: 'user_id'
      })
    }
  };
  customers.init({
    full_name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'username must be unique',
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'email must be unique',
      },
    },
    phone_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customers',
  });
  return customers;
};