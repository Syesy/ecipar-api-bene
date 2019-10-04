const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecipar", "patrick", "1", {
  host: "localhost",
  dialect: "mysql"
});
module.exports = sequelize;
