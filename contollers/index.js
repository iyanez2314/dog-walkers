const router = require('express').Router()

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard');

router.use('/dashboard', dashboardRoutes);
router.use('/api/', apiRoutes);

router.use((req, res) => {
    res.status(404).end()
});


module.exports = router;