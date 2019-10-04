const Sequelize = require("sequelize");
const sequelize = require("../lib/db");
const Dish = sequelize.define(
  "dish",
  {
    id: {
      type: Sequelize.UUIDV4,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DOUBLE
    }
  },
  {
    tableName: "dishes"
  }
);

module.exports = Dish;
