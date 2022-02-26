const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/', (req, res) => {
    res.render('homepage')
})

//
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/dashboard');
      return;
    }
 
    res.render('login');
  });


  router.get('/booking', (req, res) => {
    if (req.session.ownerloggedIn) {
      res.redirect('/booking');
      return;
    }
 
    res.render('booking');
  });

module.exports = router;

