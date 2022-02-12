const router = require('express').Router();
const sequelize = require('../config/connection');
const { dogWalker, dogs } = require('../models');

// get all dog walkers for homepage
router.get('/', (req, res) => {
  console.log('======================');
  dogWalker.findAll({
    attributes: [
      'id',
      'name'
    ]
  })
    .then(dbDogWalkerData => {
      const walkers = dbDogWalkerData.map(dogwalker => dogwalker.get({ plain: true }));

      res.render('homepage', { walkers });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;