const router = require("express").Router();
const sequelize = require("../config/connection");
const { dogWalker, dogs, owner } = require("../models");
const withAuth = require("../utils/auth");

// * Dog walker will be able to see all the dogs with their associated owner
router.get("/", withAuth, (req, res) => {
  dogs
    .findAll({
      // where: {
      //     id: req.session.id
      // },
      attributes: ["id", "name", "dogwalker_id"],
      include: [
        {
          model: dogWalker,
          attributes: ["id"],
        },
        {
          model: owner,
          attributes: ["id"],
        },
      ],
    })
    .then((dbDogWalkerData) => {
      const dogs = dbDogWalkerData.map((dog) => dog.get({ plain: true }));
      // res.json(dbDogWalkerData)
      res.render("dashboard", { dogs, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
