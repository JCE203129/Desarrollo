const express = require('express');
let router = express.Router();
let productcontrol = require('../controllers/productcontroller');

router.route('/help').get(function(req, res) {
    res.render('help');
}).post();

module.exports = router;

