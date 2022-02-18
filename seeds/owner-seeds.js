const sequelize = require('../config/connection');
const { owner } = require('../models');


const ownerData = [
    {
        name: 'Robert',
        email: 'Rob@mail.com',
        password: '1234'
    },
    {
        name: 'Alex',
        email: 'alex@mail.com',
        password: '1234' 
    },
    {
        name: 'Joey',
        email: 'doggo@mail.com',
        password: '1234'
    },
    {
        name: 'Alexis',
        email: 'Alexis@mail.com',
        password: '1234'
    },
    {
        name: 'Vanessa',
        email: 'pupwalker@mail.com',
        password: '1234'
    },
    {
        name: 'Tony',
        email: 'tony@mail.com',
        password: '1234'
    },
    {
        name: 'Jessica',
        email: 'walk@mail.com',
        password: '1234'
    },
    {
        name: 'Carl',
        email: 'pup@mail.com',
        password: '1234'
    },
    {
        name: 'Oscar',
        email: 'Os@mail.com',
        password: '1234'
    },
];

const seedOwner = () => owner.bulkCreate(ownerData);
module.exports = seedOwner;