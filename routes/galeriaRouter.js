const express = require('express');
let router = express.Router();
let productcontrol = require('../controllers/productcontroller');

router.route('/galeria').get(function(req, res) {
    res.render('galeria');
}).post();

module.exports = router;

