const express = require('express');
let router = express.Router();
let productcontrol = require('../controllers/productcontroller');

router.route('/perros').get(function(req, res) {
    res.render('perros');
}).post();

module.exports = router;
