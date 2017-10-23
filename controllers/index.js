'use strict';

var IndexModel = require('../models/index');
var address = require('./address');

module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        res.render('index', model);
    });

    router.get('/address/:id', address.get);
    router.put('/address/:id', address.put);

};
