'use strict';

var address = require('./address');

module.exports = function (router) {

    router.get('/', function (req, res) {
        res.redirect('https://github.com/chriamue/io_messenger');
    });

    router.get('/address/:id', address.get);
    router.put('/address/:id', address.put);

};
