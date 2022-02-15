const seedDogWalker = require("./dogWalker-seeds");
const seedOwner = require("./owner-seeds");
const seedDog = require("./dog-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedDogWalker();
  console.log("\n----- DogWalker SEEDED -----\n");

  await seedOwner();
  console.log("\n----- Owner SEEDED -----\n");

  await seedDog();
  console.log("\n----- Dog SEEDED -----\n");

  process.exit(0);
};

seedAll();
