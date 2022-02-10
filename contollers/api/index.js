const router = require('express').Router();

const dogRoutes = require('./dog-routes');


router.use('/dog', dogRoutes);

module.exports = router;