const sequelize = require('../config/connection');
const { owner } = require('../models');


const ownerData = [
    {
        name: 'Robert',
        email: 'Rob@mail.com'
    },
    {
        name: 'Alex',
        email: 'alex@mail.com' 
    },
    {
        name: 'Joey',
        email: 'doggo@mail.com'
    },
    {
        name: 'Alexis',
        email: 'Alexis@mail.com'
    },
    {
        name: 'Vanessa',
        email: 'pupwalker@mail.com'
    },
    {
        name: 'Tony',
        email: 'tony@mail.com'
    },
    {
        name: 'Jessica',
        email: 'walk@mail.com'
    },
    {
        name: 'Carl',
        email: 'pup@mail.com'
    },
    {
        name: 'Oscar',
        email: 'Os@mail.com'
    },
];

const seedOwner = () => owner.bulkCreate(ownerData);
module.exports = seedOwner;