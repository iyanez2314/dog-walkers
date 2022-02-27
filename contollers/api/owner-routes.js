const router = require('express').Router();
const {dogs, owner} = require('../../models');

// * Get all owners include their dogs
router.get('/', (req, res) => {
    owner.findAll({
        attributes: ['id', 'name', 'email'],
        include: [
            {
                model: dogs,
                attributes: ['id', 'name']
            }
        ]
    })
    .then(dbOwnerData => res.json(dbOwnerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
    owner.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: dogs,
                attributes: ['id', 'name']
            }
        ]
    })
    .then(dbOwnerData => {
        if(!dbOwnerData){
            res.status(404).json({ message: 'No owner found with this id' });
            return;
        }
        res.json(dbOwnerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//router.post('/', (req, res) => {
//    owner.create({
//        name: req.body.name,
//        email: req.body.email,
//        dog_name: req.body.dog_name
//    })
//    .then(dbOwnerData => res.json(dbOwnerData))
//    .catch(err => {
//        console.log(err);
//        res.status(500).json(err);
//    });
//});



// * CREATE A NEW DOG WALKER
router.post('/', (req, res) => {
    owner.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbOwnerData => {
      req.session.save(() => {
        req.session.owner_id = dbOwnerData.id;
        req.session.name = dbOwnerData.name;
        req.session.ownerloggedIn = true;

        res.json(dbOwnerData)
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.post('/ownerlogin', (req, res) => {
    owner.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbOwnerData => {
      console.log(dbOwnerData)
      if (!dbOwnerData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbOwnerData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.owner_id = dbOwnerData.id;
        req.session.name = dbOwnerData.name;
        req.session.ownerloggedIn = true;
    
        res.json({ user: dbOwnerData, message: 'You are now logged in!' });
      });
    });
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.ownerloggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });
  



router.delete('/:id', (req, res) => {
    owner.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbOwnerData => {
        if(!dbOwnerData){
            res.status(404).json({ message: 'No owner found with this id' });
            return;
        }
        res.json(dbOwnerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router