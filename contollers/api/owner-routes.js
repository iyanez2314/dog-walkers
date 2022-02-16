const router = require("express").Router();
const { dogs, owner } = require("../../models");

// * Get all owners include their dogs
router.get("/", (req, res) => {
  owner
    .findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: dogs,
          attributes: ["id", "name"],
        },
      ],
    })
    .then((dbOwnerData) => res.json(dbOwnerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  owner
    .findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: dogs,
          attributes: ["id", "name"],
        },
      ],
    })
    .then((dbOwnerData) => {
      if (!dbOwnerData) {
        res.status(404).json({ message: "No dog found with this id" });
        return;
      }
      res.json(dbOwnerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  owner
    .create({
      name: req.body.name,
    })
    .then((dbOwnerData) => res.json(dbOwnerData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  owner
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbOwnerData) => {
      if (!dbOwnerData) {
        res.status(404).json({ message: "No owner found with this id" });
        return;
      }
      res.json(dbOwnerData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
