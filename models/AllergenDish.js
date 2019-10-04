const Sequelize = require("sequelize");
const sequelize = require("../lib/db");
const Dish = require("./Dish");
const Allergen = require("./Allergen");

const AllergenDish = sequelize.define(
  "allergenDish",
  {
    id: {
      type: Sequelize.UUIDV4,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    }
  },
  {
    tableName: "allergensDishes"
  }
);

Dish.belongsToMany(Allergen, { through: AllergenDish });
Allergen.belongsToMany(Dish, { through: AllergenDish });
