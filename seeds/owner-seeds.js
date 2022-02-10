const { owner } = require('../models');
const owner = require('../models');

const ownerData = [
    {
        owner_id: 1,
        owner_name: 'Robert',
        dog_owned: 'Ranger',
    },
    {
        owner_id: 2, 
        owner_name: 'Alex', 
        dog_owned: 'Betsy',
    },
    {
        owner_id: 3, 
        owner_name: 'Joey',
        dog_owned: 'Buddy',
    },
    {
        owner_id: 4,
        owner_name: 'Alexis',
        dog_owned: 'Ladybird',
    },
    {
        owner_id: 5,
        owner_name: 'Vanessa',
        dog_owned: 'Baby',
    },
    {
        owner_id: 6,
        owner_name: 'Tony',
        dog_owned: 'Lassie',
    },
    {
        owner_id: 7, 
        owner_name: 'Jessica',
        dog_owned: 'Blue',
    },
    {
        owner_id: 8,
        owner_name: 'Carl',
        dog_owned: 'Dexter',
    },
    {
        owner_id: 9,
        owner_name: 'Oscar',
        dog_owned: 'Spot',
    },
];

const seedOwner = () => owner.bulkCreate(ownerData);
module.exports = seedOwner;