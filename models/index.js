// * Importing all models
const dogWalker = require('./dog-walker');
const dogs = require('./dog');
const owner = require('./owner');

// * All the relations will go here 

owner.hasMany(dogs, {
    foreignKey: 'owner_id'
});

dogs.belongsTo(owner, {
    foreignKey: 'owner_id'
});

// dogWalker.hasMany(dogs, {
//     foreignKey: 'owner_id'
// });

module.exports = {dogs , owner, dogWalker};