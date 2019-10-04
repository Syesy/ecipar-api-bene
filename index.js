const express = require("express");
const bodyParser = require("body-parser");
const Dish = require("./models/Dish");
const Allergen = require("./models/Allergen");
require("./models/AllergenDish");
const PORT = 3000;
function sequelize2plainObject(sequelizeObject) {
  return JSON.parse(JSON.stringify(sequelizeObject));
}
const app = express();
app.use(bodyParser.json());

app.get("/allergens", async (req, res) => {
  const allergens = await Allergen.findAll();
  return res.json(allergens);
});
app.post("/allergens", async (req, res) => {
  const newAllergen = await Allergen.create({
    name: req.body.name
  });
  return res.json(newAllergen);
});
app.get("/dishes", async (req, res) => {
  const dishes = await Dish.findAll({
    include: [
      {
        model: Allergen,
        through: {
          attributes: []
        }
      }
    ]
  });

  return res.json(dishes);
});

app.post("/dishes", async (req, res) => {
  let newDish = await Dish.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });
  await newDish.setAllergens(req.body.allergens);
  const dishWithAllergens = await Dish.findOne({
    where: {
      id: newDish.id
    },
    include: [
      {
        model: Allergen,
        through: {
          attributes: []
        }
      }
    ]
  });

  return res.json(dishWithAllergens);
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
