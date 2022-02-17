const router = require('express').Router();
const sequelize = require('../config/connection');
const { dogWalker, dogs, owner } = require('../models');


 router.get('/', (req, res) => {
     dogWalker.findAll({
         attributes: ['name', 'email', 'description']
     })
     .then(dbDogWalkerData => {
        const walker = dbDogWalkerData.map(dogWalker => dogWalker.get({ plain: true }));
         //const dogs = dbDogWalkerData.map(dog => dog.get({ plain: true }));
        //res.json(dbDogWalkerData);
        res.render('team', {walker});
     })
     .catch(err => {
         console.log(err);
         res.status(500).json(err);
     });
 });


 module.exports = router;