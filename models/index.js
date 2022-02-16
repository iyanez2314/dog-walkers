// * Importing all models
const dogWalker = require("./dog-walker");
const dogs = require("./dog");
const owner = require("./owner");

// * All the relations will go here

owner.hasMany(dogs, {
  foreignKey: "dog_id",
});

dogs.belongsTo(owner, {
  foreignKey: "owner_id",
});

dogWalker.hasMany(dogs, {
  foreignKey: "dogWalker_id",
});

// dogs.belongsto(dogWalker, {
//   foreignKey: "dogWalker_id",
// });

module.exports = { dogs, owner, dogWalker };
