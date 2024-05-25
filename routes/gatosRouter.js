const express = require('express');
let router = express.Router();
let productcontrol = require('../controllers/productcontroller');

router.route('/gatos').get(function(req, res) {
    res.render('gatos');
}).post();

module.exports = router;
