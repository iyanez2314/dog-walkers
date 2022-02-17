const sequelize = require('../config/connection');
const { dogWalker } = require('../models');


const dogWalkerData = [
    {
        name: 'Brian',
        email: 'brian@mail.com',
        password: 'password123',
        description: 'Brian loves all types of dogs'
    },
    {
        name: 'Lisa',
        email: 'L@mail.com',
        password: 'password123',
        description: 'Loves running with the pups she walks'
    },
    {
        name: 'James',
        email: 'J@mail.com',
        password: 'password123',
        description: 'James always gives his little buddies some treats'
    },
    {
        name: 'Victoria',
        email: 'V@mail.com',
        password: 'password123',
        description: 'Victoria loves her french bulldogs!'
    },
    {
        name: 'Amanda',
        email: 'A@mail.com',
        password: 'password123',
        description: 'Amanda is the sweetest walker'
    },
    {
        name: 'David',
        email: 'D@mail.com',
        password: 'password123',
        description: 'David loves his dogs'
    },
    {
        name: 'Aaron',
        email: 'AA@mail.com',
        password: 'password123',
        description: 'Aaron.. hes Aaron'
    },
    {
        name: 'Lori',
        email: 'lori@mail.com',
        password: 'password123',
        description: 'Lori is trustworthy and kind'
    },
    {
        name: 'Steven',
        email: 'S@mail.com',
        password: 'password123',
        description: 'Steven is always smiling'
    }
];

const seedDogWalker = () => dogWalker.bulkCreate(dogWalkerData, {individualHooks: true});
module.exports = seedDogWalker;