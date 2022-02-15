const router = require('express').Router();
const { dogs, owner, dogWalker } = require('../../models');

// * GET ALL DOG WALKERS
router.get('/', (req, res) => {
    dogWalker.findAll({
        attributes: ['id', 'name']
    })
    .then(dbDogWalkerData => res.json(dbDogWalkerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

// * GET DOG WALKER BY ID
router.get('/:id', (req, res)=> {
    dogWalker.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbDogWalkerData => {
        if(!dbDogWalkerData){
            res.status(404).json({ message: 'No Dog Walker found with this id' });
            return;
        }
        res.json(dbDogWalkerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// * CREATE A NEW DOG WALKER
router.post('/', (req, res) => {
    dogWalker.create({
        name: req.body.name
    })
    .then(dbDogWalkerData => res.json(dbDogWalkerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// * DELETE DOG WALKER
router.delete('/:id', (req, res) => {
    dogWalker.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbDogWalkerData => {
        if(!dbDogWalkerData){
            res.status(404).json({ message: 'No Dog Walker found with this id' });
            return;
        }
        res.json(dbDogWalkerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;