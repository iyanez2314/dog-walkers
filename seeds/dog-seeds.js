const sequelize = require('../config/connection');
const { dogs } = require('../models');


const dogData = [
    {
        name: 'Ranger',
        owner_id: 1,
        dogWalker_id: 1,
    },
    {
        name: 'Buddy',
        owner_id: 3,
        dogWalker_id: 2,
    },
    {
        name: 'Baby',
        owner_id: 5,
        dogWalker_id: 3
    },
    {
        name: 'Blue',
        owner_id: 7,
        dogWalker_id: 4,
    },
    {
        name: 'Spot',
        owner_id: 9,
        dogWalker_id: 5,
    },
    {
        name: 'Betsy',
        owner_id: 2,
        dogWalker_id: 6,
    },
    {
        name: 'Ladybird',
        owner_id: 4,
        dogWalker_id: 7,
    },
    {
        name: 'Lassie',
        owner_id: 6,
        dogWalker_id: 8,
    },
    {
        name: 'Dexter',
        owner_id: 8,
        dogWalker_id: 9,
    },
];

const seedDog = () => dogs.bulkCreate(dogData);
module.exports = seedDog; 