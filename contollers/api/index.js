const router = require('express').Router();

const dogRoutes = require('./dog-routes');
const ownerRoutes = require('./owner-routes');
const dogWalkerRoutes = require('./dog-walker-routes');
const applicantRoute = require('./applicant-route');


router.use('/dog', dogRoutes);
router.use('/owner', ownerRoutes);
router.use('/dog-walker', dogWalkerRoutes);
router.use('/applicant', applicantRoute);


module.exports = router;