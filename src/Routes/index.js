const router = require('express').Router();
const { customerRegistration } = require('../helpers/database/index');

router.use('/customers/register', customerRegistration);

module.exports = router;
