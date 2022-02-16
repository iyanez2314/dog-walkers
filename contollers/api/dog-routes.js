const router = require('express').Router();
const { dogs, owner, dogWalker } = require('../../models');

// *  GET all dogs 
router.get('/', (req, res) => {
    dogs.findAll({
        attributes: ['id', 'name', ],
        include: [
            {
                model: owner,
                attributes: ['id', 'name']
            }, 
            {
                model: dogWalker,
                attributes: ['id']
            }
        ]
    })
    .then(dbDogData => res.json(dbDogData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

// * GET dog my id
router.get('/:id', (req, res) => {
    dogs.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbDogData => {
        if(!dbDogData){
            res.status(404).json({ message: 'No dog found with this id' });
            return;
        }
        res.json(dbDogData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// * Post dogs 
router.post('/', (req, res) => {
    dogs.create({
        name: req.body.name,
        owner_id: req.body.owner_id
    })
    .then(dbDogData => res.json(dbDogData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

// * delete dogs
router.delete('/:id', (req, res) => {
    dogs.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbDogData => {
        if(!dbDogData){
            res.status(404).json({ message: 'No dog found with this id' });
            return;
        }
        res.json(dbDogData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

module.exports = router;