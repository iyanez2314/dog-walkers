const router = require('express').Router();
const sequelize = require('../config/connection');
const { dogWalker, dogs, owner} = require ('../models');
const ownerwithAuth = require('../utils/ownerauth');


// * Dog walker will be able to see all the dogs with their associated owner
router.get('/', ownerwithAuth, (req, res) => {
owner.findAll({
    // where: {
    //     id: req.session.id
    // },
    attributes: ['id', 'name', 'email']
})
.then(dbOwnerData => {
    const owners = dbOwnerData.map(owner => owner.get({ plain: true }));
    // res.json(dbDogWalkerData)
    res.render('booking', {owners, ownerloggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;