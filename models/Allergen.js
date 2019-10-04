const Sequelize = require("sequelize");
const sequelize = require("../lib/db");

const Allergen = sequelize.define(
  "allergen",
  {
    id: {
      type: Sequelize.UUIDV4,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING
    }
  },
  {
    tableName: "allergens"
  }
);

module.exports = Allergen;
