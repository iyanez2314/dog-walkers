const router = require('express').Router();
const { dog, owner } = require('../../models');

// *  GET all dogs 
router.get('/', (req, res) => {
    dog.findAll({
        attributes: ['id', 'name'],
        include: [
            {
                model: owner,
                attributes: ['id', 'name']
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
    dog.findOne({
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
    dog.create({
        name: req.body.name
    })
    .then(dbDogData => res.json(dbDogData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

// * delete dogs
router.delete('/:id', (req, res) => {
    dog.destroy({
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