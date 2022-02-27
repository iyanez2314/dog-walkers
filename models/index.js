// * Importing all models
const dogWalker = require('./dog-walker');
const dogs = require('./dog');
const owner = require('./owner');
const applicant = require('./applicant')
// * All the relations will go here 

owner.hasMany(dogs, {
    foreignKey: 'owner_id'
});

dogs.belongsTo(owner, {
    foreignKey: 'owner_id'
});

dogWalker.hasMany(dogs, {
    foreignKey: 'dogwalker_id'
});

dogs.belongsTo(dogWalker, {
    foreignKey: 'dogwalker_id'
});

// owner.belongsTo(dogWalker, {
//     foreignKey: 'id'
// })



module.exports = {dogs , owner, dogWalker, applicant};