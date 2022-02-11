const router = require('express').Router();

const dogRoutes = require('./dog-routes');
const ownerRoutes = require('./owner-routes');
const dogWalkerRoutes = require('./dog-walker-routes');


router.use('/dog', dogRoutes);
router.use('/owner', ownerRoutes);
router.use('/dog-walker', dogWalkerRoutes);


module.exports = router;