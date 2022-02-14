const { dogWalker } = require("../models");
const dogWalker = require("../models/dog");

const dogWalkerData = [
  {
    dogWalker_id: 1,
    dogWalker_name: "Brian",
    dogs_walked: "",
  },
  {
    dogWalker_id: 2,
    dogWalker_name: "Lisa",
    dogs_walked: "",
  },
  {
    dogWalker_id: 3,
    dogWalker_name: "James",
    dogs_walked: "",
  },
  {
    dogWalker_id: 4,
    dogWalker_name: "Victora",
    dogs_walked: "",
  },
  {
    dogWalker_id: 5,
    dogWalker_name: "Amanda",
    dogs_walked: "",
  },
  {
    dogWalker_id: 6,
    dogWalker_name: "David",
    dogs_walked: "",
  },
  {
    dogWalker_id: 7,
    dogWalker_name: "Aaron",
    dogs_walked: "",
  },
  {
    dogWalker_id: 8,
    dogWalker_name: "Lori",
    dogs_walked: "",
  },
  {
    dogWalker_id: 9,
    dogWalker_name: "Steven",
    dogs_walked: "",
  },
];

const seedDogWalker = () => dogWalker.bulkCreate(dogWalkerData);
module.exports = seedDogWalker;
