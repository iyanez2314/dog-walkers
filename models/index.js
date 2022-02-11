// * Importing all models
const dogWalker = require('./dog-walker');
const dogs = require('./dog');
const owner = require('./owner');

// * All the relations will go here 

dogWalker.hasMany(dogs, {
    foreignKey: 'dog_id'
});

dogs.belongsTo(owner, {
    foreignKey: 'owner_id'
});

owner.hasMany(dogs, {
    foreignKey: 'dog_id'
});

module.exports = { dogs, owner, dogWalker }