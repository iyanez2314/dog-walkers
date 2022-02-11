const seedUsers = require('./user-seeds');
const seedDogs = require('./dog-seeds');
const seedDogWalkers = require('./dogwalker-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedDogs();
  console.log('--------------');

  await seedDogWalkers();
  console.log('--------------');


  process.exit(0);
};

seedAll();
