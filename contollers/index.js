const router = require('express').Router();

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard');
const homeRoutes = require('./home-routes');
const teamRoutes = require('./team-routes')


router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api/', apiRoutes);
// router.use('/team', teamRoutes);

router.use((req, res) => {
    res.status(404).end()
});


module.exports = router;