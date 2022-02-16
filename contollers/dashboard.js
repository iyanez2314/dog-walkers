const router = require("express").Router();
const sequelize = require("../config/connection");
const { dogWalker, dogs, owner } = require("../models");
// const withAuth = require('../utils/auth');

// * Dog walker will be able to see all the dogs with their associated owner
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  res.render("/views/", {
    title: "Dashboard",
    style: "dashboard.css",
  });
  dogs
    .findAll({
      attributes: ["id"],
      include: [
        {
          model: dogWalker,
          attributes: ["id", "name"],
          include: {
            model: owner,
            attributes: ["id"],
          },
        },
        // {
        //   model: dogs,
        //   attributes: ["id", "name"],
        // },
        // {
        //   model: owner,
        //   attributes: ["id"],
        // },
      ],
    })
  .then(dbDogWalkerData => {
    const dogs = dbDogWalkerData.map(dog => dog.get({ plain: true }));
    res.json(dbDogWalkerData)
  } );
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });

module.exports = router;
