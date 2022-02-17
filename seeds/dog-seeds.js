const sequelize = require('../config/connection');
const { dogs } = require('../models');


const dogData = [
    {
        name: 'Ranger',
        owner_id: 1,
        dogwalker_id: 1,
    },
    {
        name: 'Buddy',
        owner_id: 3,
        dogwalker_id: 2,
    },
    {
        name: 'Baby',
        owner_id: 5,
        dogwalker_id: 3
    },
    {
        name: 'Blue',
        owner_id: 7,
        dogwalker_id: 4,
    },
    {
        name: 'Spot',
        owner_id: 9,
        dogwalker_id: 5,
    },
    {
        name: 'Betsy',
        owner_id: 2,
        dogwalker_id: 6,
    },
    {
        name: 'Ladybird',
        owner_id: 4,
        dogwalker_id: 7,
    },
    {
        name: 'Lassie',
        owner_id: 6,
        dogwalker_id: 8,
    },
    {
        name: 'Dexter',
        owner_id: 8,
        dogwalker_id: 9,
    },
];

const seedDog = () => dogs.bulkCreate(dogData);
module.exports = seedDog; 