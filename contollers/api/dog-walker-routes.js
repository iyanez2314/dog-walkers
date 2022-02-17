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
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbDogWalkerData => {
      req.session.save(() => {
        req.session.dogWalker_id = dbDogWalkerData.id;
        req.session.name = dbDogWalkerData.name;
        req.session.loggedIn = true;

        res.json(dbDogWalkerData)
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    dogWalker.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbDogWalkerData => {
      if (!dbDogWalkerData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbDogWalkerData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.dogWalker_id = dbDogWalkerData.id;
        req.session.name = dbDogWalkerData.name;
        req.session.loggedIn = true;
    
        res.json({ user: dbDogWalkerData, message: 'You are now logged in!' });
      });
    });
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
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