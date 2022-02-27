const router = require('express').Router();
const sequelize = require('../../config/connection');
const { applicant } = require('../../models');


router.get('/', (req, res) => {
    applicant.findAll({
        attributes : ['id', 'name', 'phone_number', 'email']
    })
    .then(applicantData => res.json(applicantData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    })
});

// * GET dog my id
router.get('/:id', (req, res) => {
    applicant.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(applicantData => {
        if(!applicantData){
            res.status(404).json({ message: 'No dog found with this id' });
            return;
        }
        res.json(applicantData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// * Post dogs 
router.post('/', (req, res) => {
    applicant.create({
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number
    })
    .then(applicantData => res.json(applicantData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;
