const router = require('express').Router();
const sequelize = require('../config/connection');
const { dogWalker, dogs, owner} = require ('../models');
const withAuth = require('../utils/auth');


// * Dog walker will be able to see all the dogs with their associated owner
router.get('/', withAuth, (req, res) => {
dogWalker.findAll({
    where: {
        id: req.session.id
    },
    attributes: ['id', 'name'],
    include: [
        {
            model: dogs,
            attributes: ['id', 'name', 'owner_id', 'dogwalker_id'],
            include: {
                model: owner,
                attributes: ['id']
            }
        },
        {
            model: dogs,
            attributes: ['id', 'name']
        },
        {
            model: owner,
            attributes: ['id']
        }
    ]
})
.then(dbDogWalkerData => {
    const dogs = dbDogWalkerData.map(dogs => dogs.get({ plain: true }));
    res.render('dashboard', {dogs, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;