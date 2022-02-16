const sequelize = require("../config/connection");
const { dogWalker } = require("../models");

const dogWalkerData = [
  {
    name: "Brian",
    email: "brian@mail.com",
    password: "password123",
  },
  {
    name: "Lisa",
    email: "L@mail.com",
    password: "password123",
  },
  {
    name: "James",
    email: "J@mail.com",
    password: "password123",
  },
  {
    name: "Victoria",
    email: "V@mail.com",
    password: "password123",
  },
  {
    name: "Amanda",
    email: "A@mail.com",
    password: "password123",
  },
  {
    name: "David",
    email: "D@mail.com",
    password: "password123",
  },
  {
    name: "Aaron",
    email: "AA@mail.com",
    password: "password123",
  },
  {
    name: "Lori",
    email: "lori@mail.com",
    password: "password123",
  },
  {
    name: "Steven",
    email: "S@mail.com",
    password: "password123",
  },
];

const seedDogWalker = () =>
  dogWalker.bulkCreate(dogWalkerData, { individualHooks: true });
module.exports = seedDogWalker;
