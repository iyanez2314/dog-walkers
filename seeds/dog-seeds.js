const { dogs } = require("../models");
const dogs = require("../models/dog");

const dogData = [
  {
    dog_name: "Ranger",
    dog_id: 9,
    owner_id: 1,
    dogWalker_id: 1,
  },
  {
    dog_name: "Buddy",
    dog_id: 8,
    owner_id: 3,
    dogWalker_id: 2,
  },
  {
    dog_name: "Baby",
    dog_id: 7,
    owner_id: 5,
    dogWalker_id: 3,
  },
  {
    dog_name: "Blue",
    dog_id: 6,
    owner_id: 7,
    dogWalker_id: 4,
  },
  {
    dog_name: "Spot",
    dog_id: 5,
    owner_id: 9,
    dogWalker_id: 5,
  },
  {
    dog_name: "Betsy",
    dog_id: 4,
    owner_id: 2,
    dogWalker_id: 6,
  },
  {
    dog_name: "Ladybird",
    dog_id: 3,
    owner_id: 4,
    dogWalker_id: 7,
  },
  {
    dog_name: "Lassie",
    dog_id: 2,
    owner_id: 6,
    dogWalker_id: 8,
  },
  {
    dog_name: "Dexter",
    dog_id: 1,
    owner_id: 8,
    dogWalker_id: 9,
  },
];

const seedDog = () => dogs.bulkCreate(dogsData);
module.exports = seedDog;
