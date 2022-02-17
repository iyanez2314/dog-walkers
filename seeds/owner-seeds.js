const sequelize = require('../config/connection');
const { owner } = require('../models');


const ownerData = [
    {
        name: 'Robert',
        email: 'Ro@mail.com'
    },
    {
        name: 'Alex',
        email: 'ao@mail.com' 
    },
    {
        name: 'Joey',
        email: 'do@mail.com'
    },
    {
        name: 'Alexis',
        email: 'fRo@mail.com'
    },
    {
        name: 'Vanessa',
        email: 'go@mail.com'
    },
    {
        name: 'Tony',
        email: 'wwo@mail.com'
    },
    {
        name: 'Jessica',
        email: 'wao@mail.com'
    },
    {
        name: 'Carl',
        email: 'fgg@mail.com'
    },
    {
        name: 'Oscar',
        email: 'gg@mail.com'
    },
];

const seedOwner = () => owner.bulkCreate(ownerData);
module.exports = seedOwner;