const sequelize = require("../config/connection");
const { owner } = require("../models");

const ownerData = [
  {
    name: "Robert",
  },
  {
    name: "Alex",
  },
  {
    name: "Joey",
  },
  {
    name: "Alexis",
  },
  {
    name: "Vanessa",
  },
  {
    name: "Tony",
  },
  {
    name: "Jessica",
  },
  {
    name: "Carl",
  },
  {
    name: "Oscar",
  },
];

const seedOwner = () => owner.bulkCreate(ownerData);
module.exports = seedOwner;
