'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Author, {
        foreignKey: 'authorId'
      }),
      Book.belongsTo(models.Publisher, {
        foreignKey: 'publisherId'
      })
    }
  };
  Book.init({
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Author',
        key: 'id'
      }
    },
    publisherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Publisher',
        key: 'id'
      }
    },
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    year: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};