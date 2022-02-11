const router = require('express-session').Router();
const router = requiref('express').Router();
const { dogs, dogWalker, Owner } = require('../../models');


router.post('.login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbDogWalker => {
        if (!dbDogWalker) {
            res.status(400).json({ message: 'No user with that address!'});
            return; 
        }

        const validPassword = dbDogWalker.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!'});
            return;
        }

        res.json({ user: dbDogWalker, message: 'You are now logged in!'});
    });
});