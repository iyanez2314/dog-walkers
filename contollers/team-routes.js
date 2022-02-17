// const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { dogWalker, dogs, owner } = require('../models');


// router.use('/', (req, res) => {
//     dogWalker.findAll({
//         attributes: ['name', 'email']
//     })
//     .then(dbDogWalkerData => {
//         const dogs = dbDogWalkerData.map(dog => dog.get({ plain: true }));

//         res.render('team', {dogs, loggedIn: true });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });